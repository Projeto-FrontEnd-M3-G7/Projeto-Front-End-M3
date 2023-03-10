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
      overflow-x: auto;
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
    padding-left: 22px;
    padding-right: 22px;

    .boxMain {
      display: flex;

      .containerCategories {
        display: flex;
      }
    }

    section {
      margin: 0;
      width: 1109px;
      max-height: 770px;

      .boxVitrine {
        max-height: 668px;
        overflow-x: auto;
      }

      .boxTitle {
        margin: 24px auto;
      }
    }
  }
`;
