import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: "Open Sans Condensed";
  padding: 15px 50px;

  @media screen and (max-width: 800px) {
    padding: 5px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
  }

  @media screen and (max-width: 300px) {
    padding: 0;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

`;
