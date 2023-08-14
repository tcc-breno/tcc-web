import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import LinearProgress from '@mui/material/LinearProgress';

const PopperAlert = ({ message, setMessage }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    setOpen(false);
    setMessage("")
  };

  //TODO
  // const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 100 : prevProgress + (100 / (6 * 1000 / 100))
  //     );
  //   }, 60);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Box
        sx={{
          height:'40px',
          borderRadius:"6px",
          padding:"0px 10px",

          backgroundColor: '#f44336',

          display:"flex",
          alignItems:"center",
          justifyContent:"space-evenly",

          color: '#e8fffa',
          fontFamily:"Montserrat",
          fontSize:"13px",
          fontWeight:"500",
          whiteSpace:"nowrap",
        }}
      > 
        <ErrorOutlineIcon 
          fontSize="inherit" 
          sx={{ 
            fontSize:"20px",
            margin:"0% 6px",
          }} 
        />
        {message}
        <CloseIcon 
          onClick={handleClose}
          fontSize="inherit" 
          sx={{ 
            fontSize:"20px",
            margin:"0% 6px",
            padding:"4px",
            borderRadius:"50%",
            "&:hover": {
              backgroundColor: '#00000027'
            },
          }} 
        />
        {/* <LinearProgress variant="determinate" value={progress} /> */}
      </Box>
    </Snackbar>
  );
};

export default PopperAlert;
