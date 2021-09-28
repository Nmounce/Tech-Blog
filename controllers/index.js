const router = require('express').Router(); //gives us a router
const apiRoutes = require('./api');
const globalRoutes = require('./globalRoutes');
const dashRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);
router.use('/', globalRoutes);
router.use('/dashboard', dashRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;