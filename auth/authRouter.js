const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel')

router.post('/register', (req, res)=>{
    let newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 8);
    newUser.password = hash;

    Users.register(newUser)
        .then(user => {
            req.session.loggedIn = true;
            res.status(201).json(user);
        })
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
                req.session.loggedIn = true;
                req.session.username = user.username;
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

router.get('/logout', (req, res)=>{
    if (req.session){
        req.session.destroy(err=>{
            err ? res.status(500).json({message: 'error logging out'}) : res.status(200).json({message: 'logged out'})
        })
    } else {
        res.status(200).json({message: 'not logged in'})
    }
})

module.exports = router;