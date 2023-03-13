import styled from "styled-components";

export const StyledHeader = styled.header`
  .boxHeader {
    width: 100%;
    background-color: var(--background_header_footer);
    opacity: 80%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 9.72%;
    padding-right: 9.72%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .boxLogo {
      display: flex;
      justify-content: space-between;
    }

    .logoImg {
      width: 71px;
      height: 34px;
      object-fit: cover;
    }

    .boxNav {
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
    }

    .hidden {
      display: none;
    }
  }

  .hamburguer {
    background-color: transparent;
    border: none;

    .img {
      font-size: 30px;
      color: var(--color-primary);
    }
  }
  .fecharMenu {
    .img {
      font-size: 30px;
    }
  }

  .categories {
    margin-top: 20px;
    animation: go-back 0.4s 2 alternate;
  }
  @keyframes go-back {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(50px);
    }
  }

  @media (min-width: 769px) {
    .boxHeader {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .boxLogo {
        img {
          width: 200px;
          height: 90px;
        }
      }

      .hamburguer {
        display: none;
      }

      .boxNav {
        display: flex;
        gap: 12px;
      }

      .btnLogin {
        background-color: black;
      }

      .categories {
        display: none;
      }
    }
  }
`;
