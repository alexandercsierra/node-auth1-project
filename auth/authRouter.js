const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel')

router.post('/register', (req, res)=>{
    let newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 8);
    newUser.password = hash;

    Users.register(newUser)
        .then(user => res.status(201).json(user))
        .catch(error=>{
            console.log(error);
            res.status(500).json({message:'server error'})
        })
})

router.post('/login', (req, res)=>{
    let {username, password} = req.body;
    Users.findBy({username})
        
        .first()
        .then(user=>{
            console.log('the body', req.body);
            if(user && bcrypt.compareSync(password, user.password)){
                res.status(200).json({message: `Welcome ${user.username}!`})
            } else {
                res.status(401).json({message: 'You shall not pass!'})
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({message:'server error'})
        })
})

module.exports = router;