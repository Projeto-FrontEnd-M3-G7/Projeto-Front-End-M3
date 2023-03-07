import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 87px;
  background-color: var(--background_header_footer);
  opacity: 80%;
  padding-left: 140px;
  padding-right: 140px;
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
    gap: 12px;
    font-size: var(--text1);
    color: var(--grey-25);
  }

  .btnLogin {
    background-color: black;
  }
`;
