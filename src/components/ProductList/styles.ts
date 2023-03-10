import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 92.78%;
  max-height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    justify-content: center;
    gap: 30px;
    max-height: 668px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
