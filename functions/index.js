const functions = require('firebase-functions');

const express = require('express')

const cors = require('cors')

const stripe = require('stripe')('sk_test_51HiMeEJxzgAxL0h9jQs9TDDkTw5Ks4fe2stScU69czGSKwJE2cNCf7niia23MAnIbXL78Z1RWGctMOBilYMM9tpS00x5aJuRmp')

//API


// - App config
const app = express()

// - Middleware
app.use(cors({origin: true}))
app.use(express.json())

// - API routes
app.get('/', (req,res) => res.status(200).send('hello'))
app.post('/payment/create', async (request, response) => {
    const total = request.query.total
    console.log('Payment request recieved', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: 'usd'
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen
exports.api = functions.https.onRequest(app)