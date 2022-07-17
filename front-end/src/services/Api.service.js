export const apiUrl = 'https://localhost:3001'
// process.env.REACT_APP_API_URL

export const getAuthorizationHeaders = () => {
  const state = store.getState()
  const user = selectUser(state)
  if (user) {
    return {
      'authorization': `Bearer ${user.accessToken}`
    }
  }
  return {}
}