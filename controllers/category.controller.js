const { response } = require("express");
const Category = require("../models/Category")

const list = async (req, res) => {
    const categories = await Category.find(req.query);
    res.json(categories)
}

const create = async (req, res) => {
    const category = new Category(req.body);
    await category.save()
    res.json(category)
}

const categoryByID = async (req, res) => {
    const id = req.params.id
    const category = await Category.findById(id);
    res.json(category)
}

const updateByID = async (req, res) => {
    const id = req.params.id
    const category = await Category.findOneAndUpdate({
        _id: id
    }, req.body, { new: true });

    res.json(category)
}

const deleteByID = async (req, res) => {
    const id = req.params.id
    const result = await Category.deleteOne({
        _id: id
    }, req.body, { new: true });

    res.json(result)
}

const deleteAll = async (req, res) => {
    const result = await Category.deleteMany()
    res.send(result);
}


module.exports = {
    list,
    create,
    categoryByID,
    updateByID,
    deleteByID,
    deleteAll,
}