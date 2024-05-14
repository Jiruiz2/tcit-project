const DeletePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delete Post</h2>
      <input
        type="text"
        placeholder="Post ID"
      />

      <button type="submit">Delete</button>
    </form>
  )
}

export default DeletePost
