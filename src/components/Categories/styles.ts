import styled from "styled-components";

export const StyledAside = styled.aside`
  background-color: var(--color-primary);
  opacity: 80%;

  @media (min-width: 769px) {
    width: 259px;
    height: 618px;
    padding: 20px;
    font-size: var(--title4);
    color: var(--grey-0);
    display: flex;
    flex-direction: column;
    gap: 11.64px;
    border-radius: var(--radius-input);
    margin-right: 28px;

    h2 {
      font-size: var(--title4);
      text-align: center;
      margin-bottom: 36.06px;
    }

    input {
      width: 219px;
      height: 42px;
      border-radius: var(--radius-input);
      border: none;
      padding-left: 8.8px;
      margin-bottom: 26px;
      position: relative;
    }

    img {
      width: 30px;
      height: 22px;
      object-fit: contain;
      position: absolute;
      top: 249px;
      left: 219px;
    }
  }
`;
