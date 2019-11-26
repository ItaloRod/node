const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// iniciando o app
const app = express()
app.use(express.json())
app.use(cors())
//Inicialização do mongoDB
try {
    //colocar o ip do container do mongo
    mongoose.connect(
        "mongodb://172.22.0.1:27017/nodeapi?keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000", {
    useUnifiedTopology: true,
    useNewUrlParser: true})
} catch (err) {
    console.log(err)
}

requireDir('./src/models')

// rotas
app.use('/api', require('./src/routes'))

// Ouve a porta 3000
app.listen(3000)