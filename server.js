const express = require('express');
const helmet = require('helmet');
const apiRouter = require('./api/apiRouter')
const cors = require('cors')
const server = express();
const session = require('express-session');
const KnexStore = require('connect-session-knex')(session);

server.use(helmet());
server.use(cors());
server.use(express.json());
const knex = require('./data/db-config');

const sessionConfig = {
    name: 'loginCookie',
    secret: 'keep it secret',
    resave: false,
    saveUnitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
        httpOnly: false
    },
    store: new KnexStore({
        knex,
        tablename: 'sessions',
        createtable: true,
        sidfieldname: 'sid',
        clearInterval: 1000 * 60 * 15
    })
}

server.use(session(sessionConfig));

server.use('/api', apiRouter);

server.get('/', (req, res)=>{
    res.status(200).json({message: "welcome to the server"})
})

module.exports=server;