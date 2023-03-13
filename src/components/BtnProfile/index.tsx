import { StyledBtn } from "./styles";
import { iProvidersProps } from "../../providers/UserContext/@types";

export const BtnProfile = ({ children }: iProvidersProps) => (
  <StyledBtn type="button">{children}</StyledBtn>
);
