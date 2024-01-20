const express = require('express')  // Imports express Framework into the webapp
const app = express() // express() function returns an expressapp object
const mongoose = require('mongoose')
const Product = require('./models/product.js')
const ejsMate = require('ejs-mate')
const path = require('path')
const port = 8080

const MONGO_URL = 'mongodb://127.0.0.1/shopping'

main()
    .then(() => {
        console.log('--------Connected to DB----------')
    })
    .catch((err) => {
        console.log('-----------Error----------', err)
    })

async function main() {
    await mongoose.connect(MONGO_URL)
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'views/listings')))
app.engine('ejs', ejsMate)

app.get('/', async (req, res) => {
    const dataItem = await Product.find({})
    res.render('listings/index.ejs', { dataItem })
})

// This method routes HTTP GET requests to the specified callback function
app.get('/products', async (req, res) => {
    const dataItem = await Product.find({})
    res.render('listings/showProduct.ejs', { dataItem })
})

app.get('/products/:id', async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id)
    res.render('listings/display.ejs', { product })
})


// login signup
app.get('/login', (req, res) => {
    res.render('listings/login.ejs')
})



// This method listens for the connection on the specified port.
// It is placed at end of the code because server must be configured fully before accepting the incoming requests
app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})