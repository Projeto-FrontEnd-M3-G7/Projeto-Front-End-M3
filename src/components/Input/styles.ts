import styled from "styled-components";

export const StyledInput = styled.input`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;

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
