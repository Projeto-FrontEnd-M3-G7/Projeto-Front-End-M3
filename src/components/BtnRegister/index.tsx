import { useContext } from "react";
import { StyledBtn } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";

interface iBtnProps {
  children: string;
  labelBtn2: string;
}

export const BtnRegister = ({ children, labelBtn2 }: iBtnProps) => {
  const { setIsOpenModalRegister } = useContext(UserContext);

  if (labelBtn2 === "Cadastrar") {
    return (
      <StyledBtn type="button" onClick={() => setIsOpenModalRegister(true)}>
        {children}
      </StyledBtn>
    );
  }
  return <StyledBtn type="button">{children}</StyledBtn>;
};
