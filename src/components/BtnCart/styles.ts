import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 23%;
  height: 100%;
  background-color: transparent;
  color: var(--grey-0);
  font-size: var(--headline);
  font-weight: 700;
  margin-top: 13.7px;
  border-radius: var(--radius-default);
  border: none;
  :hover,
  :focus {
    transform: translateX(8px) scale(1.2);
  }
  img {
    width: 71%;
    height: 100%;
  }
`;
