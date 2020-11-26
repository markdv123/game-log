const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    description: {
      type: String,
      default: 'Thank you for visiting my page!'
    },
    password_digest: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
