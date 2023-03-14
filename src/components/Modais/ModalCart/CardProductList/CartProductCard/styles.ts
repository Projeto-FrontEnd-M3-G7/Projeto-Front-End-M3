import styled from "styled-components";

export const StyledCartProductCard = styled.li`
  display: flex;

  gap: 10px;
  .imageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }
    @media (max-width: 450px) {
      width: 40px;
      height: 40px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  .contentBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px 10px 0;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        font-size: 1.4rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 220px;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 5px;
        width: max-content;

        padding: 1px 5px;

        background-color: rgb(224, 224, 224);
        input {
          font-size: 16px;
          color: black;

          width: 34px;
          padding: 4px;
          padding-left: 10px;
          border: none;

          :focus {
            outline: none;
          }
        }

        button {
          font-family: "Inter", sans-serif;
          font-size: 16px;
          padding: 0 5px;

          background-color: transparent;
          color: var(--color-secondary);
          border: none;
        }
      }
    }

    .button {
      background: transparent;
      opacity: 0.4;
      transition: 0.4s;
      font-size: 17px;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
