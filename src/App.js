import React, { useEffect } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import Payment from './Components/Payment/Payment'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './Context/StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Components/Orders/Orders'

const promise = loadStripe(
    'pk_test_51HiMeEJxzgAxL0h937q2meZMzn0iXLVQa1tCLVjM6b4fwwQttouIWk18oom8LMawpIDIgEMj0xA8SqTSkpcHHAip00FIGrEkmu'
)

function App() {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        //will only run once when the app component loads
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if (authUser) {
                //user just logged it or the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                //user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
