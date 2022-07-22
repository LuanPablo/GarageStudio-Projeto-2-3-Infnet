import { getStorageItem } from "../../services/Storage.service"

const user = JSON.parse(getStorageItem('user'))

export const userReducer = (state = user || null, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return action.payload
    case 'USER_LOGOUT':
      return null
    default:
      return state
  }
}