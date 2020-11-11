const { GamePost, Comment } = require('../db/schema')

const CreateComment = async (req, res) => {
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
}

const RemoveComment = async (req, res) => {
  await Comment.deleteOne({ _id: req.params.comment_id })
  const updatedPost = await GamePost.findByIdAndUpdate(
    req.params.post_id,
    { $pull: { comments: { _id: req.params.comment_id } } },
    { upsert: true, new: true }
  )
  res.send(updatedPost)
}

const UpdateComment = async (req, res) => {
  await Comment.findByIdAndUpdate(
    req.params.comment_id,
    { ...req.body },
    { upsert: true, new: true },
    (err, d) => (err ? err : res.send(d))
  )
}

module.exports = {
  CreateComment,
  RemoveComment,
  UpdateComment
}