import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBtn } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";

interface iBtnProps {
  children: string;
  labelBtn2: string;
}

export const BtnRegister = ({ children, labelBtn2 }: iBtnProps) => {
  const { setIsOpenModalRegister } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("@Click&Colect:TOKEN");
    localStorage.removeItem("@Click&Colect:ID");
    navigate("/");
  };

  if (labelBtn2 === "Cadastrar") {
    return (
      <StyledBtn type="button" onClick={() => setIsOpenModalRegister(true)}>
        {children}
      </StyledBtn>
    );
  }
  if (labelBtn2 === "Sair") {
    return (
      <StyledBtn type="button" onClick={handleLogout}>
        {children}
      </StyledBtn>
    );
  }
  return <StyledBtn type="button">{children}</StyledBtn>;
};
