import styled from "styled-components";

export const StyledCarDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;

  dialog {
    width: 100%;
    max-width: 400px;

    border-radius: 10px;

    padding: 15px;
    background-color: #ffffff;

    .headerModal {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 15px;

      h3 {
        margin-top: 15px;
        font-family: "Inter", sans-serif;
        font-size: var(--title3);
      }
      .span {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--grey-0);
        font-family: "Inter", sans-serif;
        font-size: 1.8rem;
        border: none;

        cursor: pointer;
        transition: 0.3s;

        :hover {
          transform: scale(1.3);
          color: var(--color-primary);
        }
      }
    }

    > p {
      font-size: var(--headline);
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: var(--color-secondary);
    }

    .boxContentProduct {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      padding: 10px;

      margin: 20px 0;

      p {
        font-size: 1.4rem;
      }
    }

    .boxButtons {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        font-size: 1.6rem;
        font-family: "Inter", sans-serif;
        color: var(--grey-0);

        border: none;
        border-radius: 6px;
        padding: 7px 30px;

        background-color: transparent;
        transition: 0.3s;

        :hover {
          transform: scale(1.01);
        }
      }
      .deletar {
        background-color: var(--color-secondary);
      }
      .cancelar {
        background-color: var(--color-primary);
      }
    }
  }
`;
