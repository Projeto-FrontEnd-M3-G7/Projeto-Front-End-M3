import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-left: 10px;
  padding-right: 10px;

  .boxMain {
    .containerCategories {
      display: none;
    }
  }

  section {
    width: 95%;
    margin: 10px auto;
    padding-top: 5px;
    background-color: var(--grey-100op);
    border-radius: var(--radius-input);

    .boxVitrine {
      height: 95%;
      max-height: 652px;
      overflow: auto;
    }

    .boxTitle {
      width: 92.78%;
      height: 53px;
      margin: 16px auto;
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

  @media (min-width: 769px) {
    height: 816px;
    padding-top: 26px;
    padding-left: 4.16%;
    padding-right: 4.16%;

    .boxMain {
      display: flex;
      justify-content: space-between;
      gap: 15px;

      .containerCategories {
        display: flex;
      }
    }

    section {
      min-width: 70%;
      margin: 0;
      max-height: 770px;

      .boxVitrine {
        width: 100%;
        height: auto;
        max-height: 668px;


      .boxTitle {
        margin: 24px auto;
      }
    }
  }
`;
