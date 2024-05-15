const SearchBar = ({ onChange, label }) => {
  const searchBar = {
    display: 'flex',
    gap: '1rem',
    border: '1px solid #000',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem'
  }

  return (
    <div style={searchBar}>
      <label htmlFor={label}>{label}</label>
      <input onChange={onChange} id={label} type="text" />
    </div>
  )
}

export default SearchBar
