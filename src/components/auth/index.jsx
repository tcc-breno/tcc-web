import { Navigate } from 'react-router-dom'

export const RequireAuth = ({ children }) => {
  const authed  = true

  return authed ? children : <Navigate to="/login" />
}