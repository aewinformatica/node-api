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

//  const Product =  mongoose.model("Product");


//rotas
//use = widecard
app.use('/api',require("./src/routes"));

app.listen(3001);