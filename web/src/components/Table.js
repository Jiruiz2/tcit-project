const Table = ({ headers, children }) => {
  const table = {
    border: '1px solid #000',
    fontSize: '0.875rem',
    width: '100%'
  }

  const header = {
    textAlign: 'left',
    padding: ''
  }

  return (
    <table style={table}>
      {headers && (
        <thead>
          <tr style={header}>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default Table
