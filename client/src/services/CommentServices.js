import ApiClient from './ApiClient'

export const __CreateComment = async (comment, post_id, username) => {
    try {
        console.log("who's ur comment", comment)
        const res = await ApiClient.post(`/comments/${post_id}/user/${username}`, comment)
        console.log("who's ur data", res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetCommentsByPost = async (post_id) => {
    try {
        const res = await ApiClient.get(`/comments/${post_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}