import styled from "styled-components";

export const StyledModalSaibaMais = styled.div`
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
      border-radius: 8px 8px 0px 0px;
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

    .products-info {
      font-family: "Inter", sans-serif;
      font-size: var(--text_card);
      font-weight: 500;
      color: var(--fontBlack);
      padding: 10px;
      text-align: justify;
      .product-price {
        color: var(--color-primary);
        margin-top: 1px;
      }
    }
    .div-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-radius: 0px 0px 8px 8px;
      gap: 5px;

      button {
        padding: 2px;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: none;
        background-color: var(--color-primary);
        font-family: "Inter", sans-serif;
        font-size: var(--headline);
        font-weight: 500;
        color: var(--grey-0);
        cursor: pointer;
      }
    }
  }
`;
