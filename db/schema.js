const { model } = require('mongoose')

const UserSchema = require('./models/User')
const GamePostSchema = require('./models/GamePost')
const CommentSchema = require('./models/Comments')

const User = model('users', UserSchema)
const Comment = model('comments', CommentSchema)
const GamePost = model('game_posts', GamePostSchema)

module.exports = {
  User,
  Comment,
  GamePost
}
