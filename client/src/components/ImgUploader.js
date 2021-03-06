import { __UploadImage } from '../services/ImageServices'

const ImgUploader = props => {
    const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME
    const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET
    const widget = window.cloudinary.createUploadWidget(
        {
            cloudName: CLOUD_NAME,
            uploadPreset: UPLOAD_PRESET,
            multiple: false,
            resourceType: "image",
            maxFileSize: 1500000
        },
        (error, result) => { checkUpload(result) }
    )

    const checkUpload = async (resultEvent) => {
        if (resultEvent.event === 'success') {
            try {
                const url = await resultEvent.info.secure_url
                const post_id = props.post_id
                if (url) {
                    await __UploadImage(url, post_id)
                    await updateRender()
                }
            } catch (err) { throw err }
        }
    }

    const updateRender = async () => {
        await props.setImages()
    }

    return (
        <div className="uploader">
            <br />
            <button className="waves-effect waves-light btn" onClick={() => widget.open()}><i className="material-icons left">image</i>Upload Image</button>
        </div>
    )
}

export default ImgUploader;