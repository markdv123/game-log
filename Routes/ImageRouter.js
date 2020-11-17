const Router = require('express').Router()
const ImageController = require('../controllers/ImageController')

Router.post('/upload', ImageController.UploadImage)
Router.get('/', ImageController.GetImages)
Router.get('/:post_id', ImageController.GetImagesByPostId)
Router.delete('/:post_id', ImageController.DeleteImages)

module.exports = Router