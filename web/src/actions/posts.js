import {
  CREATE_POST,
  DELETE_POST,
  ERROR,
  FILTER_POSTS,
  LIST_POSTS,
  LOADING
} from '../constants/redux'
import { postsApi } from '../config/axios'
import { getErrorMessage } from '../utils/errorUtil'

export const setLoading = () => ({
  type: LOADING
})

export const createPost = (post) => (
  (dispatch) => {
    dispatch(setLoading)

    postsApi.post('/posts', post).then(response => {
      dispatch({
        type: CREATE_POST,
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: ERROR,
        payload: getErrorMessage(error)
      })
    })
  }
)

export const deletePost = (id) => (
  (dispatch) => {
    dispatch(setLoading)

    postsApi.delete(`/posts/${id}`).then(response => {
      dispatch({
        type: DELETE_POST,
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: ERROR,
        payload: getErrorMessage(error)
      })
    })
  }
)

export const listPosts = () => (
  (dispatch) => {
    dispatch(setLoading)

    postsApi.get('/posts').then(postsResponse => {
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

export const filterPosts = (filterValue) => ({
  type: FILTER_POSTS,
  payload: filterValue
})
