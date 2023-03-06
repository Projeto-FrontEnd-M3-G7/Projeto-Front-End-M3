import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    list-style: none;
  }

  :root {
    --color-primary: #8637A1;
    --color-secondary: #FF0000;
    --grey-100: #D5CEFC;
    --grey-50: #F1F3F5;
    --grey-0: #FFFFFF;
    --fontBlack: #000000;
    --background_header_footer: #1A191F;

    --feedback-negative: #e60000;
    --feedback-warning: #ffcd07;
    --feedback-sucess: #168821;
    --feedback-information: #155bcb;

    --title1: 3.2rem;
    --title2: 3.0rem;
    --title3: 2.4rem;
    --title4: 2.2rem;
    --title5: 2.0rem;
    --headline: 1.8rem;
    --text_input: 1.8rem;
    --text_card: 1.6rem;

    --radius-default: 20px;
    --radius-input: 10px;

    font-size: 50.0%;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: "Inter", sans-serif;
    background-image: url('src/assets/img/imgBackground.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  button, Link {
    cursor: pointer;
    border-radius: 20px;
    border-color: var(--color-primary);
  }

  @media (min-width: 769px) {
    :root {
      font-size: 62.5%;
    }
  }

`;
