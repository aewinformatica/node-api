const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// iniciando o APP
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi',
{ useUnifiedTopology: true ,
  useNewUrlParser: true});


 requireDir('./src/models'); 

 const Product =  mongoose.model("Product");


//primeira rota
app.get('/',(req,res)=>{

  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  })
  return res.send("Hello Aewinformatica");

});

app.listen(3001);