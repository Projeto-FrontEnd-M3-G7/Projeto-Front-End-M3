import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    list-style: none;

  }
  dialog{
    display: unset;
    position: unset;

    border: none;
  }

  :root {
    --color-primary: #8637A1;
    --color-secondary: #FF0000;
    --grey-100: #D5CEFC;
    --grey-50: rgba(255, 255, 255, 0.8);
    --grey-25: #F8F8F8;
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
    --text1: 2.0rem;
    --headline: 1.8rem;
    --text_input: 1.8rem;
    --text_card: 1.6rem;

    --radius-default: 20px;
    --radius-input: 10px;

    font-size: 50.0%;
  }

  body {
    font-family: "Inter", sans-serif;
    background-image: url('src/assets/img/imgBackground.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  button, Link {
    cursor: pointer;
  }

  @media (min-width: 769px) {
    :root {
      font-size: 62.5%;
    }
  }

`;
