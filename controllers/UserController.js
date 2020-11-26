const { User, GamePost } = require('../db/schema')
const jwt = require('jsonwebtoken')
const {
  checkPassword,
  generatePassword
} = require('../middleware/PasswordHandler')

const GetProfile = async (req, res) => {
  try {
    const user = await User.find({ username: req.params.username })
    const posts = await GamePost.find({ user_id: req.params.user_id })
    res.send({ user, posts })
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const body = req.body
    const password_digest = await generatePassword(body.password)
    const user = new User({
      name: body.name,
      username: body.username,
      email: body.email,
      password_digest
    })
    user.save()
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateDesc = async (req, res, err) => {
  try {
    const user = await User.findOneAndUpdate(
      {username: req.params.username},
      {description: req.body},
      { new: true, useFindAndModify: false },
      (err, (d) => (err ? err : res.send(d)))
    )
    res.send(user)
  }catch(err){
    throw err
  }
}

const SignInUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (
      user &&
      (await checkPassword(req.body.password, user.password_digest))
    ) {
      const payload = {
        _id: user._id,
        name: user.name,
        username: user.username
      }
      res.locals.payload = payload
      return next()
    }
    res.status(401).send({ msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const RefreshSession = (req, res) => {
  try {
    const token = res.locals.token
    res.send({ user: jwt.decode(token), token: res.locals.token })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfile,
  CreateUser,
  SignInUser,
  UpdateDesc,
  RefreshSession
}