const CreatePost = () => {
  return (
    <div>
      <h2>Create Post</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default CreatePost
