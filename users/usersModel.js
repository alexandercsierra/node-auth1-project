module.exports={
    register,
    getAll,
    findBy
}

const db = require('../data/db-config');

function register(user){
    return db('users').insert(user);
}

function getAll(){
    return db('users').select('username', 'password');
}

function findBy(filter){
    return db('users').select('id', 'username','password').where(filter);
}