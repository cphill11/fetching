const router = require('express').Router();
const petRoutes = require('./pet-routes');
const userRoutes = require('./user-routes');

router.use('/pet', petRoutes);
router.use('/user', userRoutes);


module.exports = router;