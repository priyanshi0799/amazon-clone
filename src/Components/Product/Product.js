import React from 'react'
import Rating from '@material-ui/lab/Rating'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <Rating
                        value={rating}
                        max={5}
                        precision={0.1}
                        onChange={(value) =>
                            console.log(`Rated with value ${value}`)
                        }
                    />
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
