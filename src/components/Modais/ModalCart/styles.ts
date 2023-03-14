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

      padding: 10px;
      border-radius: 8px 8px 0 0;
      background-color: var(--color-primary);

      h3 {
        font-family: "Inter", sans-serif;
        font-size: var(--headline);
        font-weight: 500;
        color: var(--grey-0);
      }
      button {
        background-color: transparent;
        border: none;

        font-family: "Inter", sans-serif;
        font-size: var(--headline);
        color: rgba(255, 255, 255, 0.5);

        cursor: pointer;
        transition: 0.3s;

        :hover {
          transform: scale(1.3);
        }
      }
    }
    .cartBox {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;

      .emptyBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        p {
          font-family: "Inter", sans-serif;
          font-weight: 500;
          font-size: 1.7rem;
        }

        span {
          font-family: "Inter", sans-serif;
          font-size: 1.3rem;
        }
      }

      @media (max-width: 450px) {
        padding: 15px;
      }
    }
  }
`;
