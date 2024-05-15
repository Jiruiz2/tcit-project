import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { listPosts } from '../actions/posts'

const PostsTable = (props) => {
  useEffect(() => {
    console.log('🚀 ~ file: ListPosts.js:6 ~ useEffect ~ props', props)
    props.listPosts()
  }, [])

  if (props.loading) {
    return <div>Loading...</div>
  }

  if (props.error) {
    return <div>Error: {props.error}</div>
  }

  return (
    <div>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.posts?.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state.postsReducer
})

const mapDispatchToProps = (dispatch) => ({
  listPosts: () => dispatch(listPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsTable)
