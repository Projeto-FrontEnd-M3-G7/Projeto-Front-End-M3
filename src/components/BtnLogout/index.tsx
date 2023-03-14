import { useNavigate } from "react-router-dom";
import { StyledBtn } from "./styles";
import { iProvidersProps } from "../../providers/UserContext/@types";

export const BtnLogout = ({ children }: iProvidersProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("@Click&Colect:TOKEN");
    localStorage.removeItem("@Click&Colect:ID");
    navigate("/");
  };

  return (
    <StyledBtn onClick={handleLogout} type="button">
      {children}
    </StyledBtn>
  );
};
