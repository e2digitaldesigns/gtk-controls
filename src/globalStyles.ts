import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  * {
    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
  }
`;

export default GlobalStyle;
