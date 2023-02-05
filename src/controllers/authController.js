const router = require('express').Router();

const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (!password === repeatPassword) {
        //return res.status(404).end();
        return res.redirect('/404');
    }

    const existingUser = await authService.getUserByUsername(username);

    if (existingUser) {
        return res.redirect('/404')
    }

    const user = await authService.register(username, password);
    console.log(user);
    res.redirect('/login');
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);

        res.cookie('auth', token, {httpOnly: true});
        console.log(token);
    } catch (err) {
        console.log(err);
        // return res.redirect('/'); In this case the redirec is to the same palce so we use it at the end of the function.
    }

    res.redirect('/');
});

router.get('logout', (req, res) => {
});

module.exports = router;