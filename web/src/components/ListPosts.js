import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { deletePost, filterPosts, listPosts } from '../actions/posts'
import Table from './Table'
import Button from './Button'
import TableRow from './TableRow'
import SearchBar from './SearchBar'

const PostsTable = (props) => {
  useEffect(() => {
    props.listPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deletePost = (postId) => {
    props.deletePost(postId)
  }

  const filterPosts = (event) => {
    props.filterPosts(event.target.value)
  }

  if (props.loading) {
    return <div>Loading...</div>
  }

  if (props.error) {
    return <div>Error: {props.error}</div>
  }

  return (
    <div>
      <h2>Posts</h2>

      <SearchBar onChange={filterPosts} label="Filter" />

      <Table
        headers={['ID', 'Name', 'Description', 'Action']}>
        {props.filteredPosts?.map(post => (
          <TableRow
            key={post.id}
            items={[
              post.id,
              post.name,
              post.description,
              <Button onClick={() => deletePost(post.id)}>Delete</Button>
            ]}/>
        ))}
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state.postsReducer
})

const mapDispatchToProps = (dispatch) => ({
  listPosts: () => dispatch(listPosts()),
  deletePost: (postId) => dispatch(deletePost(postId)),
  filterPosts: (filterValue) => dispatch(filterPosts(filterValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsTable)
