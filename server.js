const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const requireDir = require('require-dir');
// iniciando o APP
const app = express();
const port = process.env.port || "3001";
//habilitando uso de Json na API
app.use(express.json());
//usando cors sem filtrar dominios liberado para todos
app.use(cors());
app.use(morgan("dev"));

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
{ useUnifiedTopology: true ,
  useNewUrlParser: true});

 requireDir('./src/models'); 
//rotas
//use = wildcard - curinga
app.use('/api',require("./src/routes"));

app.listen(port,()=>{
  console.log(`API rodando na porta ${port}`)
});