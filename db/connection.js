const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connection = mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoose.set('debug', true)

module.exports = connection
