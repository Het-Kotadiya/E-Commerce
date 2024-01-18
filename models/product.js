const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    image: {
        url: String
    },

    price: {
        type: Number
    },

    category: {
        type: String
    }
})


const product = mongoose.model('Product', productSchema)
module.exports = product