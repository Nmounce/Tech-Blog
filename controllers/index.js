const router = require('express').Router(); //gives us a router
const globalRoutes = require('./globalRoutes')

router.use('/', globalRoutes);

module.exports = router;