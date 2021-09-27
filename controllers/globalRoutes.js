const router = require('express').Router();
const {
    BlogPost,
    User
} = require('../models');

router.get('/', (req, res) => {
    const {
        user
    } = req.session;
    res.render('home', {
        user
    });
});
//login page
router.get('/login', (req, res) => {
    res.render('login', {
        user
    });
});

router.post('/login', async (req, res) => {
    try {
        let message;
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if (!userData) {
            return res.render('login', {
                message: 'user not found'
            });
        };

        const isValid = await userData.checkPass(req.body.password);
        if (isValid) {
            req.session.save(() => {
                req.session.is_logged_in = true
                req.session.user = {
                    username: userData.username,
                    bio: userData.bio,
                };
            });
            return res.redirect('/')
        } else {
            console.log("shrug");
            res.render('/login', {
                message: 'check your password'
            });
        }
    } catch (err) {
        console.log(err);
    }
});
//register page
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log(user)
        res.redirect('/register');
    } catch (err) {
        console.log(err);
    }
    res.render('register');
});


module.exports = router;