export const userLogin = (userData) => ({
    type: 'USER_LOGIN',
    payload: userData
  })
  
  export const userLogout = () => ({
    type: 'USER_LOGOUT'
  })