const { GamePost, User, Comment } = require('../db/schema')

const GetPosts = async (req, res) => {
  try{
    const { page, limit } = req.query
    const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
    const posts = await GamePost.find()
      .limit(parseInt(limit))
      .skip(offset)
      .sort({ popularity_rating: 'desc' })
    res.send({ results: posts.length, posts })
  }catch(err){
    throw err
  }
}

const GetPostsByUserId = async (req, res) => {
  try{
    const { page, limit } = req.query
    const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
    const posts = await GamePost.find({user_id: req.params.user_id})
      .limit(parseInt(limit))
      .skip(offset)
      .sort({ popularity_rating: 'desc' })
    res.send({ results: posts.length, posts })
  }catch(err){
    throw err
  }
}

const GetPostsByGameId = async (req, res) => {
  try{
    const { page, limit } = req.query
    const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
    const posts = await GamePost.find({game_id: req.params.game_id})
      .limit(parseInt(limit))
      .skip(offset)
      .sort({ popularity_rating: 'desc' })
    res.send({ results: posts.length, posts })
  }catch(err){
    throw err
  }
}

const GetPostById = async (req, res) => {
  try {
    const post = await GamePost.findById(req.params.post_id).populate([
      {
        model: 'users',
        path: 'user_id',
        select: '_id name'
      },
      {
        path: 'comments',
        populate: {
          path: 'user_id',
          model: 'users',
          select: '_id name'
        }
      }
    ])
    res.send(post)
  }catch(err){
    throw err
  }
}

const CreatePost = async (req, res) => {
  try {
    const newPost = new GamePost({ ...req.body, username: req.params.username })
    newPost.save()
    res.send(newPost)
  }catch(err){
    throw err
  }
}

const DeletePost = async (req, res) => {
  try{
    const post = await GamePost.findById(req.params.post_id)
    await Comment.deleteMany({ _id: { $in: post.comments } })
    await GamePost.findByIdAndDelete(req.params.post_id)
    res.send({ msg: 'Post deleted' })
  }catch(err){
    throw err
  }
}

const UpdatePost = async (req, res, err) => {
  try{
    const updatedPost = await GamePost.findByIdAndUpdate(
      req.params.post_id,
      { ...req.body },
      { new: true, useFindAndModify: false },
      (err, (d) => (err ? err : res.send(d)))
    )
    res.send(updatedPost)
  }catch(err){
    throw err
  }
}

module.exports = {
  GetPosts,
  GetPostsByUserId,
  GetPostsByGameId,
  GetPostById,
  CreatePost,
  DeletePost,
  UpdatePost
}
