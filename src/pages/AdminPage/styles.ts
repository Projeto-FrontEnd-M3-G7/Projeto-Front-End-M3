import styled from "styled-components";

export const StyledAdminPage = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--grey-0);
  .adminMain {
    margin: 0 auto;
    width: 84%;
    height: 80%;

    margin-top: 2%;
    .options {
      margin-bottom: 2%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 4%;
      width: 100%;
      h1 {
        font-size: var(--title3);
      }
      select {
        border-radius: var(--radius-input);
        width: 15%;
        height: 100%;
      }
      button {
        border-radius: var(--radius-input);
        width: 5%;
        height: 100%;
        color: var(--grey-0);
        background-color: var(--color-primary);
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      margin: 0 auto;
      padding: 2%;
      background-color: var(--grey-50);
      width: 76%;
      height: 90%;
      gap: 3%;
      ::-webkit-scrollbar {
        width: 5px;
        height: fit-content;
        background-color: var(--grey-50);
      }
      ::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);
      }
      li {
        padding: 1%;
        gap: 2px;
        display: flex;
        margin: 0px auto;
        flex-direction: row;
        background-color: var(--grey-0);

        align-items: center;
        width: 90%;
        height: 100%;
        border-bottom: 1px solid var(--color-primary);
        aside {
          gap: 1%;
          width: fit-content;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: flex-start;
          .btn-delete {
            margin-top: 20%;
          }
          button {
            border: none;
            background: none;

            img {
              width: 65%;
            }
          }
        }
        .products-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          gap: 2%;
          justify-content: space-evenly;

          h3 {
            font-size: var(--text1);
          }
          p {
            margin-top: 2%;
            font-size: var(--text_card);
          }
          .product-bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 74%;
            gap: 2%;
          }
        }
      }
    }
  }
`;
