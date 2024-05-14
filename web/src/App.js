import React from 'react'

import CreatePost from './components/CreatePost'
import DeletePost from './components/DeletePost'
import Filter from './components/Filter'
import ListPosts from './components/ListPosts'

const App = () => (
  <div>
    <Filter />
    <ListPosts />
    <CreatePost />
    <DeletePost />
  </div>
)

export default App