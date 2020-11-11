const { User, GamePost } = require('../db/schema')

const GetProfile = async (req, res) => {
  const user = await User.findById(req.params.user_id).select('_id name')
  const posts = await GamePost.find({ user_id: req.params.user_id })
  res.send({ user })
  res.send({ user, posts })
}

const GetProfiles = async (req, res) => {
    const { page, limit } = req.query
  const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
  const profiles = await User.find()
    .limit(parseInt(limit))
    .skip(offset)
    .sort({ popularity_rating: 'desc' })
  res.send({ results: profiles.length, profiles })
}

const CreateUser = async (req, res) => {
  const body = req.body
  const user = new User({
    name: body.name,
    email: body.email,
    password_digest: body.password
  })
  user.save()
  res.send(user)
}

const SignInUser = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })
  if (user && user.password_digest === req.body.password) {
    const payload = {
      _id: user._id,
      name: user.name
    }
    return res.send(payload)
  }
  res.status(401).send({ msg: 'Unauthorized' })
}

module.exports = {
  GetProfile,
  GetProfiles,
  CreateUser,
  SignInUser
}