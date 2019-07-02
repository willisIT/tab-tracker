const  AuthController = require('./controllers/AuthControllers')
const  SongsController = require('./controllers/SongsControllers')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
    app.post('/register',
        AuthControllerPolicy.register,
        AuthController.register
    ),
    app.post('/login',
        AuthController.login
    ),
    app.get('/users',
        AuthController.users_getAll
    ),
    app.get('/songs',
        SongsController.index
    ),
    app.post('/songs',
        SongsController.post
    ),
    app.get('/songs/:songId',
        SongsController.show
    ),
    app.put('/songs/:songId',
        SongsController.update
    )
}