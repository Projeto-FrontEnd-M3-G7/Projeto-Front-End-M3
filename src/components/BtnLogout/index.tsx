import { useNavigate } from "react-router-dom";
import { StyledBtn } from "./styles";

export const BtnLogout = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("@Click&Colect:TOKEN");
    navigate("/");
  };

  return (
    <StyledBtn onClick={handleLogout} type="button">
      {children}
    </StyledBtn>
  );
};
