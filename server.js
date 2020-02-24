const express = require('express');
const helmet = require('helmet');
const apiRouter = require('./api/apiRouter')
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', apiRouter);

server.get('/', (req, res)=>{
    res.status(200).json({message: "welcome to the server"})
})

module.exports=server;