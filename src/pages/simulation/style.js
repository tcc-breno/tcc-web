import styled from "styled-components";

export default styled.div`

  max-width: 100vw;
  max-height: 100vh;

  .container{
    width: 100vw;
    height: 92vh;
    display: flex;

    position:relative;
  }

  .openInfoPanel{
    width: 60px;
    height: 60px;
    background-color: black;

    position: absolute;
    right: 10px;
    top:10px;
    z-index: 1;
  } 

`