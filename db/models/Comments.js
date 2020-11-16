const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    post_id: {
      type: Schema.Types.ObjectId,
      ref: 'game_post'
    },
    username: {
      type: String,
      required: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  },
  { timestamps: true }
)