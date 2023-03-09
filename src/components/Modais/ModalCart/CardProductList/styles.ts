import styled from "styled-components";

export const StyledCartProductList = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 200px;
    overflow: auto;
  }
  > p {
    height: 2px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  .totalBox {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    h3 {
      font-size: var(--text_card);
    }

    .total {
      font-family: "Inter", sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: #828282;
    }
  }
  > button {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #828282;

    padding: 15px 0;
    margin-top: 10px;

    background-color: #e0e0e0;
    border: none;
    border-radius: 15px;
    transition: 0.3s;

    :hover {
      color: #e0e0e0;
      background-color: #828282;
    }
  }
  .finalizar {
    background-color: var(--color-primary);
    color: #ffffff;

    :hover {
      background-color: #8236c3;
    }
  }
`;
