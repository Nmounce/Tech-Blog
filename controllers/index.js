const router = require('express').Router(); //gives us a router
const apiRoutes = require('./api');
const homeRoutes = require('./home-route');
const dashRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;