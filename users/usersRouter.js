const router = require('express').Router();
const Users = require('./usersModel');

router.get('/', (req, res)=>{
    Users.getAll()
        .then(users => res.status(200).json(users))
        .catch(error=>{
            console.log(error);
            res.status(500).json({message:'server error'})
        })
})

module.exports = router;