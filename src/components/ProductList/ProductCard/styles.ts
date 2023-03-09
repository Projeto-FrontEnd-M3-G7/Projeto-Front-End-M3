import styled from "styled-components";

export const StyledLi = styled.li`
  width: 195px;
  min-height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  background-color: var(--grey-50);
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
    width: 111.76px;
    height: 73.13px;
    margin-top: 10px;
    object-fit: cover;
  }

  p {
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 16.4px;
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

  @media (min-width: 769px) {
    width: 284px;
    height: 259.87px;

    img {
      width: 162.61px;
      height: 108.6px;
    }

    p {
      max-width: 250px;
      font-size: var(--text1);
      margin-bottom: 30px;
    }

    span {
      font-size: var(--text1);
    }
  }
`;
