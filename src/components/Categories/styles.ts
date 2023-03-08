import styled from "styled-components";

export const StyledAside = styled.aside`
  height: 318px;
  margin: 10px;
  background-color: var(--color-primary);
  padding: 15px;
  opacity: 80%;
  font-size: var(--title4);
  color: var(--grey-0);
  border-radius: var(--radius-input);
  position: relative;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: var(--title4);
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    min-height: 42px;
    border-radius: var(--radius-input);
    border: none;
    padding-left: 8.8px;
    margin-bottom: 16px;
  }

  img {
    width: 30px;
    height: 22px;
    object-fit: contain;
    position: absolute;
    top: 65px;
    right: 25px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 11.64px;
    flex-wrap: wrap;
    overflow-y: auto;

    li {
      transition: transform 1s;
      transform: translateX(0) scale(1);
      cursor: pointer;

      :hover,
      :focus {
        transform: translateX(20px) scale(1.2);
        filter: brightness(80%);
      }
    }
  }

  @media (min-width: 769px) {
    width: 259px;
    height: 618px;
    margin-right: 28px;
    margin-top: 0;

    h2 {
      margin-bottom: 36.06px;
    }

    input {
      margin-bottom: 26px;
    }

    img {
      top: 85px;
      left: 205px;
    }
  }
`;
