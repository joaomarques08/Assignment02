const productRoutes = require('express').Router()
const productController = require('../../controllers/product.controller')

// GET
productRoutes.get('/', productController.list)
productRoutes.get('/published', productController.getPublished)
productRoutes.get('/:id', productController.productByID)

// POST
productRoutes.post('/', productController.create)

// PUT
productRoutes.put('/:id', productController.updateByID)

// DELETE
productRoutes.delete('/', productController.deleteAll)
productRoutes.delete('/:id', productController.deleteByID)




module.exports = productRoutes