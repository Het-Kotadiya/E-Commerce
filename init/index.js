const mongoose = require('mongoose')
const initData = require('./data.js')
const Product = require('../models/product.js')

main()
    .then(() => {
        console.log('---------DB connection Successfull---------')
    })
    .catch((err) => {
        console.log('---------Error--------', err)
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopping')
}

const initDB = async () => {
    await Product.deleteMany({})
    await Product.insertMany(initData.data)
    console.log('--------DB successfully initialized---------')
}

initDB()