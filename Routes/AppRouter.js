const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')
const GamePostRouter = require('./GamePostRouter')

Router.use('/users', UserRouter)
Router.use('/posts', GamePostRouter)
Router.use('/comments', CommentRouter)

module.exports = Router