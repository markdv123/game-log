const Router = require('express').Router()
const ImageController = require('../controllers/ImageController')

Router.post('/upload/image', ImageController.UploadImage)
Router.get('/images', ImageController.GetImages)
Router.get('/images/:post_id', ImageController.GetImagesByPostId)
Router.delete('/images', ImageController.DeleteImages)

module.exports = Router