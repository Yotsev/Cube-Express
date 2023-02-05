//Used to turn a callback based functions to promises
const util = require('util');
const jwtCallback = require('jsonwebtoken');

/* Making a callback funtion to return a promise we do it with unil.promisifay
function promisSign(payload, secret, options){
    const promise = new Promise(function(resolve, reject) {
        jwtCallback.sign(payload, secret, options, (err, token)=>{
            if (err) {
                return reject(err);
            }

            resolve(token);
        });
    });

    return promise;
}
*/

const jwt = {
    sign: util.promisify(jwtCallback.sign),
    verify: util.promisify(jwtCallback.verify),
};

module.exports = jwt;