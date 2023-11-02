const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String,
    published: { type: Boolean, default: false }
});

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product