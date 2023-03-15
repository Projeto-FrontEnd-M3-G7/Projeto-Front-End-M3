import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBtn } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";

interface iBtnProps {
  children: string;
  labelBtn1: string;
}

export const BtnLogin = ({ children, labelBtn1 }: iBtnProps) => {
  const { setIsOpenModalLogin } = useContext(UserContext);
  const navigate = useNavigate();

  if (labelBtn1 === "Login") {
    return (
      <StyledBtn
        type="button"
        onClick={() => {
          setIsOpenModalLogin(true);
        }}
      >
        {children}
      </StyledBtn>
    );
  }
  if (labelBtn1 === "Voltar") {
    return (
      <StyledBtn
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        {children}
      </StyledBtn>
    );
  }
  return <StyledBtn type="button">{children}</StyledBtn>;
};
