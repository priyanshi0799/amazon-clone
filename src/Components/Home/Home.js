import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    alt="banner"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />

                <div className="home__row">
                    <Product
                        id="1"
                        title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="2"
                        title="kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51zfRoC1iYL._SX425_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3.5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="4"
                        title="Amazon Echo (3rd Edition) | Smart speaker with Alexa, Charcol Edition"
                        price={98.99}
                        rating={4.7}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)-Silver (4th Edition)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gming Monitor - Super Ultra Wide Dual WQHD $120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
