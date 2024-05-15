const Button = ({ onClick, type, children }) => {
  const button = {
    color: 'white',
    backgroundColor: '#6495ED',
    padding: '0.25rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: 'none'
  }

  return (
    <button onClick={onClick} style={button} type={type}>{children}</button>
  )
}

export default Button
