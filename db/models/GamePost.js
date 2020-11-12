const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    game_id: {
      type: String,
      required: true,
    },
    game_name: {
      type: String,
      required: true,
    },
    description: {
      type: String
    },
    image_url: {
      type: String,
    },
    developer: {
      type: String
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comments'
      }
    ]
  },
  { timestamps: true }
)
