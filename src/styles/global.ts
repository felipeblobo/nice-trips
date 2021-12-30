import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #166B74;
    --background: #030518;
    --white: #eeeeee;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html {
    font-size: 62.5%;
  };

  html, body, #__next {
    height: 100%;
  };
  
  body {
    background: var(--background);
    color: var(--white);
    font-family: -apple-system, BlinkMacSysstemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  };

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  };

  a {
    color: var(--highlight);
  };

`;

export default GlobalStyles;
