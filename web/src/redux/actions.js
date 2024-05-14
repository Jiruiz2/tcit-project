import { CREATE_POST, DELETE_POST, ERROR, LIST_POSTS, LOADING } from '../constants/redux'
import { postsApi } from '../config/axios'
import { getErrorMessage } from '../utils/errorUtil'

export const setLoading = () => {
  return {
    type: LOADING
  }
}

export const createPost = async (post) => {
  try {
    const response = await postsApi.post('/posts', post)
  
    return {
      type: CREATE_POST,
      payload: response.data
    }
  } catch (error) {
    return {
      type: ERROR,
      payload: getErrorMessage(error)
    }
  }
}

export const deletePost = async (id) => {
  try {
    const response = await postsApi.delete(`/posts/${id}`)
  
    return {
      type: DELETE_POST,
      payload: response.data
    }
  } catch (error) {
    return {
      type: ERROR,
      payload: getErrorMessage(error)
    }
  }
}

export const listPosts = async () => {
  try {
    const response = await postsApi.get('/posts')
  
    return {
      type: LIST_POSTS,
      payload: response.data
    }
  } catch (error) {
    return {
      type: ERROR,
      payload: getErrorMessage(error)
    }
  }
}
