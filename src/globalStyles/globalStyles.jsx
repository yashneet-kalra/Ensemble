import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    --white: #f5ffff;
    --darkest-orange: #ffaf00;
    --dark-orange: #F07900;
    --mid-orange: #F8A145;
    --lighter-black: #151515;
    --darker-black: #010101;
  }
  body{
    overflow-y: hidden;
    background: var(--white);
    padding: 0;
  }
`;

export default GlobalStyles;
