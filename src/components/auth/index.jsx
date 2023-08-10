import { Navigate } from 'react-router-dom'
import React  from 'react';

export const RequireAuth = ({ children }) => {
  const authed  = true

  return authed ? children : <Navigate to="/login" />
}