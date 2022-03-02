const router = require('express').Router();
const profileRoutes = require('./profile-routes');

router.use('/profiles', profileRoutes);


module.exports = router;