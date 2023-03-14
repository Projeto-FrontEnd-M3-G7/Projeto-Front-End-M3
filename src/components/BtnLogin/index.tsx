import { useContext } from "react";
import { StyledBtn } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";

interface iBtnProps {
  children: string;
  labelBtn1: string;
}

export const BtnLogin = ({ children, labelBtn1 }: iBtnProps) => {
  const { setIsOpenModalLogin } = useContext(UserContext);

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
  return <StyledBtn type="button">{children}</StyledBtn>;
};
