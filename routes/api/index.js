const apiRoutes = require('express').Router()
const productRoutes = require('./product')
const categoryRoutes = require('./category')

apiRoutes.get('/', (req, res) => res.send('API'))
apiRoutes.use('/products', productRoutes)
apiRoutes.use('/categories', categoryRoutes)

module.exports = apiRoutes