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
    max-width: 550px;

    border-radius: 10px;

    padding: 15px;
    background-color: #ffffff;

    animation: animacaoModal 0.5s;

    @keyframes animacaoModal {
      from {
        transform: translateY(-100px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

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
        border: none;

        font-family: "Inter", sans-serif;
        font-size: 1.8rem;

        cursor: pointer;
        transition: 0.3s;

        :hover {
          transform: scale(1.3);
          color: var(--color-primary);
        }
      }
    }

    .boxContentProduct {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      padding: 10px;

      margin: 20px 0;

      h2 {
        font-size: 1.4rem;
        font-family: "Inter", sans-serif;
        font-weight: 600;
      }
      > p {
        font-size: 1.4rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        margin-top: 20px;
      }
    }

    .control {
      > p {
        font-size: 1.4rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        margin-top: 20px;
      }

      ul {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 15px;

        li {
          display: flex;
          flex-direction: column;
          gap: 5px;
          justify-content: space-between;

          border: none;
          border-radius: 8px;

          background-color: #d9d9d9;

          padding: 10px;

          span {
            font-family: "Inter", sans-serif;
            font-size: 1.2rem;
            font-weight: 500;
            margin: 5px 0;

            text-align: center;
          }

          p {
            font-family: "Inter", sans-serif;
            font-size: 1.1rem;
          }
        }
      }
    }

    .cancelar {
      font-size: 1.6rem;
      font-family: "Inter", sans-serif;
      color: var(--grey-0);

      border: none;
      border-radius: 6px;
      padding: 10px 30px;

      background-color: transparent;
      transition: 0.3s;

      width: 100%;

      :hover {
        transform: scale(1.01);
      }
      background-color: var(--color-primary);
    }
  }
`;
