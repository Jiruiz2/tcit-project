import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listPosts, setLoading } from '../redux/actions'

const PostsTable = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading())

      const posts = await listPosts()

      dispatch(posts)
    }

    fetchData()
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
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
          {posts.map(post => (
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

export default PostsTable