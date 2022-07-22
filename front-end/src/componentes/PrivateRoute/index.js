import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectUser } from "../../store/User/User.selectors"

export function PrivateRoute ({ children, userTypes }) {
  const user = useSelector(selectUser)
  if (!user) {
    return <Navigate to="/portal/login" />
  }
  if (userTypes && !userTypes.includes(user.type)) {
    return <Navigate to="/portal" />
  }
  return children
}