const express = require('express')  // Imports express Framework into the webapp
const app = express() // express() function returns an expressapp object
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const session = require('express-session')
const mongoose = require('mongoose')
const Product = require('./models/product.js')
const Order = require('./models/order.js')
const ejsMate = require('ejs-mate')
const path = require('path')
const User = require('./models/user.js')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const flash = require('connect-flash')
// const MongoStore = require('connect-mongo')
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
app.use(express.static(path.join(__dirname, 'views/includes')))
app.engine('ejs', ejsMate)
app.use(cookieParser('secretCode'))

const sesisonOptions = {
    secret: 'cookieSecretCode',
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 30 * 60 * 1000),  // set to expire in 30 minutes.
        httpOnly: true
    }
}

app.use(session(sesisonOptions))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Middleware to set userAuthenticated variable for all routes
app.use((req, res, next) => {
    if (req.user) {
        res.locals.userName = req.user.username;
        res.locals.userId = req.user.id;
        res.locals.userAuthenticated = true;
    } else {
        res.locals.userAuthenticated = false;
    }
    next();
});


app.get('/', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    res.render('listings/index.ejs', { dataItem: dataItem, orderItem: orderItem, userAuthenticated: res.locals.userAuthenticated })
})

// This method routes HTTP GET requests to the specified callback function
app.get('/products', async (req, res) => {
    const dataItem = await Product.find({})
    const selectedCategory = req.query.selectedCategory || 'All Products'
    const sortOption = req.query.price || 'None';

    const filteredItems = dataItem.filter(item => {
        return selectedCategory === 'All Products' || item.categories.includes(selectedCategory)
    })

    if (sortOption === 'Low To High') {
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'High To Low') {
        filteredItems.sort((a, b) => b.price - a.price);
    }

    const orderItem = await Order.find({})
    res.render('listings/showProduct.ejs', { dataItem: dataItem, filteredItems: filteredItems, orderItem: orderItem })

})

app.get('/profile', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    res.render('listings/profile.ejs', { dataItem: dataItem, orderItem: orderItem, userAuthenticated: res.locals.userAuthenticated, userName: res.locals.userName, userId: res.locals.userId })
})

app.post('/profile', (req, res) => {
    let userId = req.user.id;
    let username = req.user.username;
    let password = req.user.password;
    let mobile = req.body.mobile
    let address = req.body.address;
    if (req.body.username) {
        username = req.body.username
    }
    if (req.body.password) {
        password = req.body.password
    }

    const updateUserData = {
        username: username,
        mobile: mobile,
        address: address,
        password: password
    }

    User.updateMany(
        { _id: userId },
        { $set: updateUserData }
    )
        .then(result => {
            console.log('User detail Update Successfull')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
})

app.get('/products/:id', async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id)
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    res.render('listings/display.ejs', { product, dataItem, orderItem })
})

// login & signup
app.get('/signup', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    res.render('listings/signup.ejs', { dataItem, orderItem })
})

app.post('/signup', async (req, res) => {

    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    let registeredUser = await User.register(newUser, req.body.password)
    res.redirect('/login')
})

app.post('/order/:id/:price', async (req, res) => {
    // console.log(req.user.id)
    // console.log(req.params.price)
    // console.log(req.params.id)
    // console.log(req.body)
    if (req.user === undefined) {
        res.redirect('/login')
    }
    else {
        const product = await Product.findById(req.params.id)
        let newOrder = new Order({
            userId: req.user.id,
            productId: req.params.id,
            quantity: req.body.quantity,
            size: req.body.size,
            color: req.body.color,
            amount: req.params.price,
            productTitle: product.title,
            productImg: product.img,
        })
        newOrder.save()
            .then(savedOrder => {
                // Successfully saved to the database
                res.redirect('/products')
            })
            .catch(error => {
                // Handle the error if the order couldn't be saved
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }

})

app.get('/login', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    res.render('listings/login.ejs', { dataItem, orderItem })
})

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
}),
    async (req, res) => {
        res.redirect('/')
    }
)

app.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

app.get('/cart', async (req, res) => {
    if (req.user === undefined) {
        res.redirect('/login')
    } else {
        const dataItem = await Order.find({ userId: req.user.id })
        const orderItem = await Order.find({})
        res.render('listings/cart.ejs', { dataItem, orderItem })
    }

})

app.get('/checkout' , async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    let address = req.user.address
    let userName = req.user.username
    res.render('listings/checkout.ejs', { dataItem, orderItem, address, userName })
})

app.get('/confirm' , async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    const order = await Order.deleteMany({})
    res.render('listings/confirm.ejs', {dataItem, orderItem})
})

app.post('/search', async (req, res) => {
    const productTitle = req.body.productName
    const product = await Product.findOne({ title: productTitle })
    res.redirect(`/products/${product._id}`)

})

// This method listens for the connection on the specified port.
// It is placed at end of the code because server must be configured fully before accepting the incoming requests
app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})