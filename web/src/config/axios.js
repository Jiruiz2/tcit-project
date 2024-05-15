import axios from 'axios'

console.log('🚀 ~ file: axios.js:9 ~ process.env.REACT_APP_POSTS_API_URL:', process.env.REACT_APP_POSTS_API_URL)
export const postsApi = axios.create({
  baseURL: process.env.REACT_APP_POSTS_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
