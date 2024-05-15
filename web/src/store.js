import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit'
import logger  from 'redux-logger'
import { thunk } from 'redux-thunk'

import postsReducer from './reducers/posts'

const rootReducer = combineReducers({
  postsReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(thunk, logger)
})

export default store
