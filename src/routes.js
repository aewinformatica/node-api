const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//listando
routes.get('/products', ProductController.index);
//pesquisando
routes.get('/products/:id',ProductController.show);
//armazenando
routes.post('/products', ProductController.store);
//atualizando
routes.put('/products/:id', ProductController.update);
//deletando
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;