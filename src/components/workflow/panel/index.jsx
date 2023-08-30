import React  from 'react';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container"
import CloseIcon from '@mui/icons-material/Close';

export default ({ isOpen, setIsOpen, Component }) => {
  
  const closePanel = () => {
    setIsOpen(false);
  }

  return (
    <div>
      {isOpen && <Container 
        sx={{
          "backgroundColor":"white",
          "height":"100%",
          "width": ( isOpen ) ? "30vw" : "0vw",
          // "padding":"1% 5%",
          "transition":".6s",
          "overflow": "hidden", 
        }}
      > 
      
        <Box onClick={closePanel}>
          <CloseIcon/>
        </Box>
        
      </Container>
      }
    
    </div>
  )
}