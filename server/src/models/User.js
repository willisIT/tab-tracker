// const Promise = require('bluebird')
// const bcrypt =Promise.promisifyAll(require('bcrypt'))
 
// function hashPassword (user, options) {
//     console.log(user.password)
//     const SALT_FACTOR = 8

//     if (!user.changed('password')) {
//         return;
//     }
//     return bcrypt
//         .genSalt(SALT_FACTOR)
//         .then(salt => bcrypt.hash(user.password, salt, null))
//         .then(hash => {
//             user.setDataValue('password', hash)
//         })
// }

module.exports = (sequelize, DataTypes) => 
    // const User = 
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
        },
        // {
        //     hooks: {
        //         beforeCreate: hashPassword,
        //         beforeUpdate: hashPassword,
        //         beforeSave: hashPassword
        //     }
        // }
    )
    
    // User.prototype.comparePassword = function (password) {
    //     console.log(password, this.password)
    //     return bcrypt.compare(password, this.password)
    // } 

    // return User