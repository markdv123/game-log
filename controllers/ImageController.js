const Image = require('../db/schema')

const UploadImage = async (req, res) => {
    try {
      const newImage = new Image({url: req.body.url, post_id: req.params.post_if})
      newImage.save()
      res.send({msg: 'Upload Success'})
    } 
    catch(err) { throw err }
}

const GetImages = async (req, res) => {
    try {
        const images = await Image.find()
        res.send(images)
    } 
    catch(err) { throw err }
}

const GetImagesByPostId = async (req, res) => {
    try {
        const images = await Image.find({post_id: req.params.post_id})
        res.send(images)
    } 
    catch(err) { throw err }
}

const DeleteImages = async (req, res) => {
    try {
        await Image.deleteMany({post_id: req.params.post_id})
        res.send({msg: 'Deleted all images'})
    }
    catch(err) { throw err }
}

module.exports = {
    UploadImage,
    GetImages,
    GetImagesByPostId,
    DeleteImages,
}