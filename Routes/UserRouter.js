const Router = require('express').Router()
const UserController = require('../controllers/UserController')

Router.get('/', UserController.GetProfiles)
Router.get('/:user_id', UserController.GetProfile)
Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInUser)

module.exports = Router