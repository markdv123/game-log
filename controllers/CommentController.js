const { GamePost, Comment } = require('../db/schema')

const CreateComment = async (req, res) => {
  try{
    const comment = new Comment({ ...req.body, user_id: req.params.user_id })
    comment.save()
    await GamePost.update(
      { _id: req.params.post_id },
      {
        $push: {
          comments: comment
        }
      }
    )
    res.send(comment)
  }catch(err){
    throw err
  }
}

const RemoveComment = async (req, res) => {
  try{
    await Comment.deleteOne({ _id: req.params.comment_id })
    const updatedPost = await GamePost.findByIdAndUpdate(
      req.params.post_id,
      { $pull: { comments: { _id: req.params.comment_id } } },
      { upsert: true, new: true }
    )
    res.send(updatedPost)
  }catch(err){
    throw err
  }
}

const UpdateComment = async (req, res) => {
  try{
    await Comment.findByIdAndUpdate(
      req.params.comment_id,
      { ...req.body },
      { upsert: true, new: true },
      (err, d) => (err ? err : res.send(d))
    )
  }catch(err){
    throw err
  }
}

module.exports = {
  CreateComment,
  RemoveComment,
  UpdateComment
}