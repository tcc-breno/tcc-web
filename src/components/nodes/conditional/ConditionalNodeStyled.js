import styled from "styled-components";

export const ConditionalNodeStyled = styled.div`
  
    background-color: #4b4bbb;
    width: 100px;
    height: 100px;
    color: white;
    border-radius: 10px;
    
    display:flex;
    align-items: center;
    justify-content: center;
  
    transform: rotate(45deg);
    p{
      transform: rotate(-45deg);
    }
  
    .handle_bottom{
      left: 100%;
    }
`