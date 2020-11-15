import ApiClient from './ApiClient'

export const __UploadPost = async (formData, username) => {
  try {
    const res = await ApiClient.post(`/posts/${username}/?active=true`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetPosts = async (page, limit) => {
  try {
    const res = await ApiClient.get(
      `/posts?page=${page || 1}&limit=${limit || 10}`
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetPostsByUsername = async (user_id, page, limit) => {
  try {
    const res = await ApiClient.get(
      `/posts/by/${user_id}?page=${page || 1}&limit=${limit || 10}`
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetPostsByGame = async (game_id, page, limit) => {
  try {
    const res = await ApiClient.get(
      `/posts/about/${game_id}?page=${page || 1}&limit=${limit || 10}`
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetPost = async (postId) => {
  try {
    const res = await ApiClient.get(`/posts/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UpdatePost = async (formData, postId) => {
  try {
    const res = await ApiClient.put(`/posts/${postId}?active=true`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __DeletePost = async (postId) => {
  try {
    const res = await ApiClient.delete(`/posts/${postId}?active=true`)
    return res
  } catch (error) {
    throw error
  }
}