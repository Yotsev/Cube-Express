const User = require('../models/User');
const config = require('../configs/config');
const jwt = require('../lib/jsonwebtoken');

//This is an async function that we away in the controller
exports.getUserByUsername = (username) => User.findOne({ username });
/*Can be done like this:
exports.getUserByUsername = async(username)=> {
    const user = await User.findOne({username});

    return user;
}
*/

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);

    if (!user) {
        throw 'Invalid username or password';
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
        throw 'Invalid username or password';
    }

    const payload = { username: user.username };
    const token = await jwt.sign(payload, config.SECRET, { expiresIn: '2h' });

    return token;
};