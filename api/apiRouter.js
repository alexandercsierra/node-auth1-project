const router = require('express').Router();
const authRouter = require('../auth/authRouter');
const usersRouter = require('../users/usersRouter');
const restricted = require('../auth/restrictedMiddleware')

router.use('/auth', authRouter);
router.use('/users', restricted, usersRouter);

module.exports = router;