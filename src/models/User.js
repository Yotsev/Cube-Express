const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requierd: true,
        minLength: 3,
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password is too short'],
    },

});

//Hashing the password before save woring with promise
userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;

            next();
        });
});

/* Can be done with async function
userSchema.pre('save', async function () {
   const hash = await bcrypt.hash(this.password, 10);
   this.password = hash;
});
*/

//Async function but we don't use the result so we retung the promise
userSchema.method('validatePassword', function(password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;