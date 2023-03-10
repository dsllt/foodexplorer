import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
  
  body, input, ul, li, text {
    font-family: 'Roboto', sans-serif;
  }

  button, h1 {
    font-family: 'Poppins', sans-serif;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9)
  }
`