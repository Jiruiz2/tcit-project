import { connect } from 'react-redux'

import { createPost } from '../actions/posts'

import Button from './Button'

const CreatePost = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()

    props.createPost({
      name: event.target.name.value,
      description: event.target.description.value
    })
  }
  
  const createForm = {
    display: 'flex',
    gap: '0.5rem',
  }

  const inputForm = {
    border: '1px solid #000',
    padding: '0.25rem',
    borderRadius: '5px'
  }

  return (
    <div>
      <h3>New Post</h3>
      <form onSubmit={handleSubmit} style={createForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" style={inputForm} required/>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" style={inputForm} required/>
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state.postsReducer
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
