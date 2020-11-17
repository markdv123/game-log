const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')
const GamePostRouter = require('./GamePostRouter')
const ImageRouter = require('./ImageRouter')

Router.use('/users', UserRouter)
Router.use('/posts', GamePostRouter)
Router.use('/comments', CommentRouter)
Router.use('/images', ImageRouter)

module.exports = Router