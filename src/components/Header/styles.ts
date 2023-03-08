import styled from "styled-components";

export const StyledHeader = styled.header`
  .boxHeader {
    width: 100%;
    height: 60px;
    background-color: var(--background_header_footer);
    opacity: 80%;
    padding-left: 9.72%;
    padding-right: 9.72%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 71px;
      height: 34px;
      object-fit: cover;
    }

    .boxNav {
      display: none;
    }

    .boxNavIcon {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  .hidden {
    display: none;
  }

  .showMenu {
    animation: go-back 1s 2 alternate;
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
      height: 122px;

      .boxNavIcon {
        display: none;
      }

      .boxLogo {
        height: 122px;

        img {
          width: 216px;
          height: 105px;
        }
      }

      .boxNav {
        display: flex;
        gap: 12px;
      }

      .btnLogin {
        background-color: black;
      }
    }
  }
`;
