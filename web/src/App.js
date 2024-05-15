import React from 'react'

import CreatePost from './components/CreatePost'
import ListPosts from './components/ListPosts'

const App = () => {
  const container = {
    margin: '3rem 2rem'
  }

  return (
    <div style={container}>
      <ListPosts />
      <CreatePost />
    </div>
  )
}

export default App