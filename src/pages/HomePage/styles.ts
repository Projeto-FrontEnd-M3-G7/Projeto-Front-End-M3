import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: auto;
  padding-top: 16px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 769px) {
    padding-top: 26px;
    padding-left: 22px;
    padding-right: 22px;

    .boxMain {
      display: flex;
    }

    section {
      width: 1109px;
      height: 775px;
      background-color: var(--grey-100);
      opacity: 80%;
      border-radius: var(--radius-input);

      .boxTitle {
        width: 92.78%;
        height: 53px;
        margin: 24px auto;
        background-color: var(--color-primary);
        border-radius: var(--radius-input);
        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
          font-size: var(--title3);
          font-weight: 500;
          color: var(--grey-0);
        }
      }
    }
  }
`;
