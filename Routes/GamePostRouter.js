const Router = require('express').Router()
const PostController = require('../controllers/PostController')

Router.get('/', PostController.GetPosts)
Router.get('/by/:user_id', PostController.GetPostsByUserId)
Router.get('/about/:game_id', PostController.GetPostsByGameId)
Router.get('/:post_id', PostController.GetPostById)
Router.post('/:username', PostController.CreatePost)
Router.put('/:post_id', PostController.UpdatePost)
Router.delete('/:post_id', PostController.DeletePost)


module.exports = Router