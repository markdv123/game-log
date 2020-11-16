const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.get(
  '/:post_id', CommentController.GetCommentsByPost
)
Router.post(
  '/:post_id/user/:username', CommentController.CreateComment
)
Router.delete(
  '/:post_id/remove/:comment_id', CommentController.RemoveComment
)
Router.put(
  '/:comment_id', CommentController.UpdateComment
)

module.exports = Router