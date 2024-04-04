const express = require('express'); // Import the express framework
const app = express(); // Create an express app instance
const cookieParser = require('cookie-parser'); // Middleware for parsing cookies
const bodyParser = require('body-parser'); // Middleware for parsing incoming request bodies
const session = require('express-session'); // Middleware for session management
const mongoose = require('mongoose'); // MongoDB object modeling tool
const Product = require('./models/product.js'); // Import Product model
const Order = require('./models/order.js'); // Import Order model
const ejsMate = require('ejs-mate'); // Template engine for rendering EJS templates
const path = require('path'); // Module for working with file and directory paths
const User = require('./models/user.js'); // Import User model
const passport = require('passport'); // Authentication middleware for Node.js
const LocalStrategy = require('passport-local'); // Local authentication strategy for passport
const flash = require('connect-flash'); // Middleware for displaying flash messages
const port = 8080; // Port for server to listen on

// MongoDB connection URL
const MONGO_URL = 'mongodb://127.0.0.1/shopping'

// Main function to initialize the application
main()
    .then(() => {
        console.log('--------Connected to DB----------')
    })
    .catch((err) => {
        console.log('-----------Error----------', err)
    })

// Function to connect to MongoDB
async function main() {
    await mongoose.connect(MONGO_URL) // Connect to MongoDB
}

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set views directory
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public directory
app.use(express.static(path.join(__dirname, 'assets'))); // Serve static files from assets directory
app.use(express.static(path.join(__dirname, 'views/listings'))); // Serve static files from listings directory
app.use(express.static(path.join(__dirname, 'views/includes'))); // Serve static files from includes directory
app.engine('ejs', ejsMate); // Use ejs-mate for rendering EJS templates
app.use(cookieParser('secretCode')); // Parse cookies with secret code

// Session Configuration
const sessionOptions = {
    secret: 'cookieSecretCode', // Secret for signing session ID cookie
    resave: true, // Forces the session to be saved back to the session store
    saveUninitialized: true, // Saves new but uninitialized sessions
    cookie: {
        expires: new Date(Date.now() + 30 * 60 * 1000), // Cookie expiration time (30 minutes)
        httpOnly: true // Ensures cookies are only accessed through HTTP requests
    }
};

// Initialize session middleware with options
app.use(session(sessionOptions));

// Flash messages middleware
app.use(flash());

// Passport initialization
app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Use passport session for persistent login sessions

// Passport local strategy setup for user authentication
passport.use(new LocalStrategy(User.authenticate()));

// Serialize and deserialize user instances for session management
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to set userAuthenticated variable for all routes
app.use((req, res, next) => {
    if (req.user) {
        // Set user-related local variables if authenticated
        res.locals.userName = req.user.username;
        res.locals.userId = req.user.id;
        res.locals.userAuthenticated = true;
    } else {
        // Set userAuthenticated to false if not authenticated
        res.locals.userAuthenticated = false;
    }
    next();
});


// Route definitions

// Homepage route
app.get('/', async (req, res) => {
    // Retrieve products and orders from database
    const dataItem = await Product.find({});
    const orderItem = await Order.find({});
    // Render homepage with data
    res.render('listings/index.ejs', { dataItem: dataItem, orderItem: orderItem, userAuthenticated: res.locals.userAuthenticated, isAdmin: res.locals.userName });
});

// Product listing route
app.get('/products', async (req, res) => {
    // Retrieve products from database
    const dataItem = await Product.find({});
    // Retrieve selected category and sort option from query parameters
    const selectedCategory = req.query.selectedCategory || 'All Products';
    const sortOption = req.query.price || 'None';
    // Filter products based on selected category
    const filteredItems = dataItem.filter(item => {
        return selectedCategory === 'All Products' || item.categories.includes(selectedCategory);
    });
    // Sort products based on sort option
    if (sortOption === 'Low To High') {
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'High To Low') {
        filteredItems.sort((a, b) => b.price - a.price);
    }
    // Retrieve orders from database
    const orderItem = await Order.find({});
    // Render product listing page with data
    res.render('listings/showProduct.ejs', { dataItem: dataItem, filteredItems: filteredItems, orderItem: orderItem, isAdmin: res.locals.userName });
});

// Profile route
app.get('/profile', async (req, res) => {
    // Retrieve products and orders from database
    const dataItem = await Product.find({});
    const orderItem = await Order.find({});
    // Render profile page with data and user information
    res.render('listings/profile.ejs', { dataItem: dataItem, orderItem: orderItem, userAuthenticated: res.locals.userAuthenticated, userName: res.locals.userName, userId: res.locals.userId, isAdmin: res.locals.userName });
});

// Update profile route
app.post('/profile', (req, res) => {
    // Update user profile data
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

// Product details route
app.get('/products/:id', async (req, res) => {
    // Retrieve product details from database
    let { id } = req.params;
    const product = await Product.findById(id)
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    res.render('listings/display.ejs', { product, dataItem, orderItem, isAdmin: res.locals.userName })
})

// Signup route
app.get('/signup', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    // Render signup page
    res.render('listings/signup.ejs', { dataItem, orderItem, isAdmin: res.locals.userName })
})


// Signup form submission route
app.post('/signup', async (req, res) => {

    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    // Save user to database
    let registeredUser = await User.register(newUser, req.body.password)
    res.redirect('/login')
})

// Order submission route
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


// Login route
app.get('/login', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    res.render('listings/login.ejs', { dataItem, orderItem, isAdmin: res.locals.userName })
})

// Login form submission route
app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
}),
    async (req, res) => {
        res.redirect('/')
    }
)

// Logout route
app.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// Cart route
app.get('/cart', async (req, res) => {
    if (req.user === undefined) {
        res.redirect('/login')
    } else {
        const dataItem = await Order.find({ userId: req.user.id })
        const orderItem = await Order.find({})
        res.render('listings/cart.ejs', { dataItem, orderItem, isAdmin: res.locals.userName })
    }

})

// Checkout route
app.get('/checkout', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    let address = req.user.address
    let userName = req.user.username
    res.render('listings/checkout.ejs', { dataItem, orderItem, address, userName, isAdmin: res.locals.userName })
})

// Confirmation route 
app.get('/confirm', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    const order = await Order.deleteMany({})
    res.render('listings/confirm.ejs', { dataItem, orderItem, isAdmin: res.locals.userName })
})

app.get('/upload', async (req, res) => {
    const dataItem = await Product.find({})
    const orderItem = await Order.find({})
    res.render('listings/upload.ejs', {dataItem, orderItem, isAdmin: res.locals.userName})
})

// Incomplete Code
app.post('/upload', async (req, res) => {
    console.log(req.body)
    const product = await Product.find({})
    let newProduct = new Product({
        title: req.body.Title,
        desc: req.body.Description,
        img: req.body.Image,
        size: req.body.Size,
        color: req.body.Color,
        price: req.body.Price
    })
    newProduct.save()
        .then(savedOrder => {
            // Successfully saved to the database
            res.redirect('/products')
        })
        .catch(error => {
            // Handle the error if the order couldn't be saved
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
})

// Search Route
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