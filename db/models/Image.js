const {Schema} = require('mongoose')

module.exports = new Schema(
    {
        img_url: {
            type: String,
            required: true
        },
        post_id: {
            type: Schema.Types.ObjectId,
            ref: 'game_post'
        }
    },
    {timestamps: true}
)