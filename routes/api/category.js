const categoryRoutes = require('express').Router()
const categoryController = require('../../controllers/category.controller')

// GET
categoryRoutes.get('/', categoryController.list)
categoryRoutes.get('/:id', categoryController.categoryByID)

// POST
categoryRoutes.post('/', categoryController.create)

// PUT
categoryRoutes.put('/:id', categoryController.updateByID)

// DELETE
categoryRoutes.delete('/', categoryController.deleteAll)
categoryRoutes.delete('/:id', categoryController.deleteByID)


module.exports = categoryRoutes