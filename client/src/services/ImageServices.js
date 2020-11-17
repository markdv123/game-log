import ApiClient from './ApiClient'

export const __UploadImage = async (url, post_id) => {
    try {
        const res = await ApiClient.post('/images/upload', {url, post_id})
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetImages = async (post_id) => {
    try {
        const res = await ApiClient.get(`/images/${post_id}`)
        const imgUrls = res.data.map(img => img.img_url)
        return imgUrls
    } catch (error) {
        throw error
    }
}