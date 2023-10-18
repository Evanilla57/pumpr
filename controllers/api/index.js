const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const findRoutes = require('./findUsers');




router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
router.use('/find-users', findRoutes);


module.exports = router;
