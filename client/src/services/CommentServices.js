import ApiClient from './ApiClient'

export const __CreateComment = async (formData, post_id, username) => {
    try {
        const res = await ApiClient.post(`/comments/${post_id}/user/${username}`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetCommentsByPost = async (post_id) => {
    try {
        console.log("2")
        const res = await ApiClient.get(`/comments/${post_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}