const {User} = require('../models')
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function jwtSign(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res){
        try{
            const saltRounds = 10;
            bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
                if (err) {
                    return res.status(500).json(err)
                }
                console.log(hash)
                const user = await User.create({
                    email:   req.body.email,
                    password: hash
                })
                res.status(201).json({
                    user: user,
                    token: jwtSign(user.toJSON())
                })
            });
        }
        catch (err) {
            console.log(err)
            res.status(400).json({
                error: 'This email account is already in use.',
            })
        }
    },
    async login(req, res){
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).json({
                    error: 'The login information was incorrect'
                })
            }
            bcrypt.compare(password, user.password, function(err, result) {
                if (!result) {
                    return res.status(403).json({
                        error: 'The info was incorrect'
                    })
                }
                res.status(201).json({
                    user: user,
                    token: jwtSign(user.toJSON())
                })
            });
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                error: 'error has occured',
            })
        }
    },
    async users_getAll(req, res){
        try{
            const user = await User.findAll()
            res.status(200).json({
                user
            })
        }
        catch (err) {
            res.status(500).json({
                error: 'errorr occured',
            })
        }
    },
}