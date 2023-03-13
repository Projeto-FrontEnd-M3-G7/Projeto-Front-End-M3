import styled from "styled-components";

export const StyledLi = styled.li`
  width: 284px;
  height: 259.87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: var(--grey-25);
  filter: drop-shadow(0px 5px 4px rgba(134, 55, 161, 0.89));

  transition: transform 1s;
  transform: translateX(0) scale(1);
  cursor: pointer;

  :hover,
  :focus {
    transform: translateX(3px) scale(1.03);
    filter: brightness(80%);
  }

  img {
    width: 162.61px;
    height: 108.6px;
    object-fit: contain;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    padding-top: 10px;
  }

  p {
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 20px;
    line-height: 25px;
    max-height: 50px;
    font-size: var(--text_card);
    font-weight: 500;
    color: var(--fontBlack);
    text-align: center;
  }

  span {
    font-size: var(--text_card);
    font-weight: 600;
    color: var(--fontBlack);
  }

  .btnCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: none;

    p {
      margin: 30px auto;
      font-size: var(--text1);
    }

    span {
      font-size: var(--text1);
    }
  }

  @media (min-width: 769px) {
    .btnCard {
      p {
        height: 52px;
        margin-bottom: 15px;
        max-width: 250px;
        font-size: var(--text1);
      }
    }
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
`;
