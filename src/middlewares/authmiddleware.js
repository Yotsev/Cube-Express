const jwt = require('../lib/jsonwebtoken');
const config = require('../configs/config');

//global middleware
exports.authenticaion = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, config.SECRET);

            //attaching the token to the request
            req.user = decodedToken;
            req.isAuthenticated = true;

            //locals comes for express and handlebarss can read them there are res.locals and req.locals
            res.locals.username = decodedToken.username;
            res.locals.isAuthenticated = true;
        } catch (err) {
            console.log(err.message);

            res.clearCookie('auth');
            return res.redirect('/404');
        }
    }

    next();
};

//routgurad
exports.isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.redirect('/login');
    }

    next();
}