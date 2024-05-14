import { CREATE_POST, DELETE_POST, ERROR, LIST_POSTS, LOADING } from '../constants/redux'

const initialState = {
  posts: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case LIST_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null
      }
    case CREATE_POST:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
        error: null
      }
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post.id !== action.payload.id),
        error: null
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer