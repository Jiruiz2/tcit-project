import { CREATE_POST, DELETE_POST, ERROR, LIST_POSTS, LOADING } from '../constants/redux'
import { postsApi } from '../config/axios'
import { getErrorMessage } from '../utils/errorUtil'

export const setLoading = () => ({
  type: LOADING
})

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

export const listPosts = () => (
  (dispatch) => {
    dispatch(setLoading)

    postsApi.get('/posts').then(postsResponse => {
      console.log('🚀 ~ file: posts.js:46 ~ postsApi.get ~ postsResponse:', postsResponse)
      dispatch({
        type: LIST_POSTS,
        payload: postsResponse.data
      })
    }).catch(error => {
      dispatch({
        type: ERROR,
        payload: getErrorMessage(error)
      })
    })
  }
)
