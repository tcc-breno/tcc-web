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

    cursor: pointer;

    transform: translateX(25px) rotate(45deg);
    p{
      transform: rotate(-45deg);
    }
  
    .handle_top{
      left:0%;
    }

    .handle_left{
      background-color: #4b4bbb;
      height: 100px;
      width: 100px;
      top: 50%
    }

    .handle_rigth{
      top: 100%
    }

    .handle_bottom{
      left: 100%;
    }
`