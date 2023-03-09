import { StyledBtn } from "./styles";

interface iBtnProps {
  children: string;
}

export const BtnLogin = ({ children }: iBtnProps) => (
  <StyledBtn type="button">{children}</StyledBtn>
);
