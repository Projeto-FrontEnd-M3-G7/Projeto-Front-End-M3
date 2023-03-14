import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  background-color: var(--background_header_footer);
  opacity: 80%;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .boxInfoRedes {
    img {
      width: 35px;
      height: 35px;
    }
  }

  .boxContact {
    display: flex;
    gap: 6px;

    .btnContact {
      font-size: var(--text_card);
      color: var(--grey-25);
      border: none;
      background-color: transparent;
    }
  }

  .btnLogin {
    background-color: black;
  }

  @media (min-width: 769px) {
    height: 87px;
    padding-left: 9.72%;
    padding-right: 9.72%;

    .boxContact {
      gap: 12px;
      font-size: var(--text1);

      .btnContact {
        font-size: var(--text1);
      }
    }
  }
`;
