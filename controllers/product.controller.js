const { response } = require("express");
const Product = require("../models/Product")

const list = async (req, res) => {
    const products = await Product.find(req.query);
    res.json(products)
}

const create = async (req, res) => {
    const product = new Product(req.body);
    await product.save()
    res.json(product)
}

const productByID = async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id);
    res.json(product)
}

const updateByID = async (req, res) => {
    const id = req.params.id
    const product = await Product.findOneAndUpdate({
        _id: id
    }, req.body, { new: true });

    res.json(product)
}

const deleteByID = async (req, res) => {
    const id = req.params.id
    const result = await Product.deleteOne({
        _id: id
    }, req.body, { new: true });

    res.json(result)
}

const deleteAll = async (req, res) => {
    const result = await Product.deleteMany()
    res.send(result);
}

const getPublished = async (req, res) => {
    const published = await Product.find({
        published: true
    })

    res.json(published)
}

module.exports = {
    list,
    create,
    productByID,
    updateByID,
    deleteByID,
    deleteAll,
    getPublished
}