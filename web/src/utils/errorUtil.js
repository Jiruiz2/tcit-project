export const getErrorMessage = (error) => (
  (error.response.data) ? JSON.stringify(error.response.data) : error.message
)