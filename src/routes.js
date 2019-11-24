const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

//Rotas
routes.get('/products', ProductController.index)
routes.get('/product/:id', ProductController.show)
routes.post('/products', ProductController.store)
routes.put('/product/:id', ProductController.update)
routes.delete('/product/:id', ProductController.destroy)
module.exports = routes