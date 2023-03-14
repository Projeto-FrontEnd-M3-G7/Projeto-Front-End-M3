import { useNavigate } from "react-router-dom";
import { StyledBtn } from "./styles";
import { iProvidersProps } from "../../providers/UserContext/@types";

export const BtnProfile = ({ children }: iProvidersProps) => {
  const navigate = useNavigate();

  const navigateDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <StyledBtn type="button" onClick={() => navigateDashboard()}>
      {children}
    </StyledBtn>
  );
};
