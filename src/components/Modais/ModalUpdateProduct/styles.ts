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

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      margin-top: 20px;

      div {
        display: flex;
        gap: 20px;
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

export const StyledTextarea = styled.textarea`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;

  height: 130px;
  padding: 13px;

  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.01);
  }
  :focus {
    outline: none;
  }
`;
