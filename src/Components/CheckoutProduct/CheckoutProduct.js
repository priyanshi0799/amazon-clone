import React from 'react'
import './CheckoutProduct.css'
import Rating from '@material-ui/lab/Rating'
import { useStateValue } from '../../Context/StateProvider'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <Rating value={rating} max={5} precision={0.1} />
                </div>
                {hideButton && (
                    <button onClick={removeFromBasket}>
                        Remove from Basket
                    </button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
