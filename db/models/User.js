const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    password_digest: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
