const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const connectDB = require('../db/connect')
const {createProduct} = require('./controllers/createProduct')
const {getProductsController} = require('./controllers/getProductsController');
const { registerController } = require('./controllers/registerController');


const url = process.env.MONGO_URI




const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.post('/products' , createProduct)
app.get('/products' , getProductsController)
app.post('/register' , registerController)













const start = (url)=>{
    try {
        connectDB(url)
        app.listen(8080)
        console.log("server listening on port 8080")
    } catch (error) {
        console.log(error)
    }
}

start(url)