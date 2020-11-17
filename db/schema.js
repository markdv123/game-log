const { model } = require('mongoose')

const UserSchema = require('./models/User')
const GamePostSchema = require('./models/GamePost')
const CommentSchema = require('./models/Comments')
const ImageSchema = require('./models/Image')

const User = model('users', UserSchema)
const Comment = model('comments', CommentSchema)
const GamePost = model('game_posts', GamePostSchema)
const Image = model('image', ImageSchema)

module.exports = {
  User,
  Comment,
  GamePost,
  Image
}
