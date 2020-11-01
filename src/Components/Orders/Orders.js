import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { useStateValue } from '../../Context/StateProvider'
import Order from './Order/Order'
import './Orders.css'

function Orders() {
    const [orders, setOrders] = useState([0])
    // eslint-disable-next-line no-unused-vars
    const [{ basket, user }, dispatch] = useStateValue()

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot((snapshot) => {
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                })
        } else {
            setOrders([])
        }
    }, [])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map((order) => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
