const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

  async index(req,res){
    const products = await Product.find();

    return res.json(products);
  },
  async store(req,res){
    //recebe o corpo da requisição
    const product = Product.create(req.body); 

    //devolve como resposta o product criado
    return res.json(product);
  }
};