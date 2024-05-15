import {
  CREATE_POST,
  DELETE_POST,
  ERROR,
  FILTER_POSTS,
  LIST_POSTS,
  LOADING
} from '../constants/redux'

const initialState = {
  filteredPosts: [],
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
        filteredPosts: action.payload,
        posts: action.payload,
        error: null
      }
    case CREATE_POST:
      return {
        ...state,
        loading: false,
        filteredPosts: [...state.filteredPosts, action.payload],
        error: null
      }
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        filteredPosts: state.filteredPosts.filter(post => post.id !== action.payload.id),
        error: null
      }
    case FILTER_POSTS:
      return {
        ...state,
        filteredPosts: state.posts.filter(post => post.name.includes(action.payload))
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