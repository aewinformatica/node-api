const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

  async index(req,res){
    //?page=2 ficou como default 1
    const {page = 1} = req.query;
                                            //1 param seria queryes where etc..     
    const products = await Product.paginate({},{page, limit:10});

    return res.json(products);
  },

  async show(req,res){
    //http://localhost:3001/api/products/5dbe56ad756b061dd8f7a29d
    const product = await Product.findById(req.params.id)

    return res.json(product);
  },
  async store(req,res){
    //recebe o corpo da requisição
    const product = Product.create(req.body); 

    //devolve como resposta o product criado
    return res.json(product);
  },
  async update(req,res){
    //Busca o produto e atualiza e  o new = true diz que e pra retornar o valor atualizado caso false ele retorna o valor antigo
    const product = Product.findByIdAndUpdate(req.params.id,req.body,{new: true});
    //retornando o produto em json
    return res.json(product); 

  },
  async destroy(req,res){
    await Product.findByIdAndRemove(req.params.id);

    //resposta de sucesso sem nenhum conteudo
    return res.send();
  }
};