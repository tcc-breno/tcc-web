import React from 'react';
import { AppRoutes } from './routes'
import { LoadingConsumer } from './context/loadingContext';
import { Backdrop, CircularProgress } from '@mui/material';
import './style.css'


const App = () => {
  const { isLoading } = LoadingConsumer();

  return (
    <React.StrictMode>
      <AppRoutes />
      <Backdrop sx={{ zIndex: 10 }} open={isLoading}>
          <CircularProgress color="inherit" />
      </Backdrop>
    </React.StrictMode>
  )
}

export default App