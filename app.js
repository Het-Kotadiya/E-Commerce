if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const express = require('express')  // Imports express Framework into the webapp
const app = express() // express() function returns an expressapp object
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const session = require('express-session')
const mongoose = require('mongoose')
const Product = require('./models/product.js')
const ejsMate = require('ejs-mate')
const path = require('path')
const User = require('./models/user.js')
const passport = require('passport')
const LocalStrategy = require('passport-local')
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

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'views/listings')))
app.engine('ejs', ejsMate)
app.use(cookieParser('secretCode'))
const sesisonOptions = {
    secret: 'cookieSecretCode',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 30 * 60 * 1000)  // set to expire in 30 minutes.
    }
}

app.use(session(sesisonOptions))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


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

// login & signup
app.get('/signup', (req, res) => {
    res.render('listings/signup.ejs')
})

app.post('/signup', async (req, res) => {

    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    let registeredUser = await User.register(newUser, req.body.password)
    // res.send(registeredUser)
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('listings/login.ejs')
})

app.get('/cart', (req, res) => {
    res.render('listings/cart.ejs')
})


// This method listens for the connection on the specified port.
// It is placed at end of the code because server must be configured fully before accepting the incoming requests
app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})