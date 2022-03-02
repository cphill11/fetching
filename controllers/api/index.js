const router = require('express').Router();
const profileRoutes = require('./profile-routes');
const userRoutes = require('./user-routes');

router.use('/profiles', profileRoutes);
router.use('/user', userRoutes);


module.exports = router;