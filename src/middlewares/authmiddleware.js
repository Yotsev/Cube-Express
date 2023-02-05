const jwt = require('../lib/jsonwebtoken');
const config = require('../configs/config');

exports.authenticaion = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, config.SECRET);
            
            //attaching the token to the request
            req.user = decodedToken;
        } catch (err) {
            console.log(err.message);
            res.clearCookie('auth');
            res.redirect('/404');
        }
    }

    next();
};