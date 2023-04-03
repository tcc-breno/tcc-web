import styled from "styled-components";

export const VariablePageStyled = styled.div`

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #EEEEEE;

  .variable_component {
    width: 80vw;
    height: 50vh;
    box-sizing: border-box;

    padding: 18px;

    background-color: white;
    border-radius: 8px;

    font-family: "Segoe UI";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0em;
    color: #656565;
  }

  .variable_container, .title {
    display: flex;
    justify-content: space-between;
  }
  
  .variable_container .variable_name, .title .variable_name {
    width: 40%;
  }

  .variable_container .variable_type, .title .variable_type { 
    width: 30%;
  }

  .variable_container .variable_value, .title .variable_value{
    width: 35%;
  }

`