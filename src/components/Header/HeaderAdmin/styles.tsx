import styled from "styled-components";

export const StyledHeaderAdmin = styled.header`
  width: 100%;
  height: 122px;
  background-color: var(--background_header_footer);
  opacity: 80%;
  padding-left: 140px;
  padding-right: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .boxLogo {
    height: 122px;

    img {
      width: 216px;
      height: 105px;
      object-fit: cover;
    }
  }

  .boxNav {
    display: flex;
    gap: 12px;
  }
`;
