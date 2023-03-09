import { StyledBtn } from "./styles";

interface iBtnProps {
  children: string;
  labelBtn2: string;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BtnRegister = ({
  children,
  labelBtn2,
  setIsOpenModalRegister,
}: iBtnProps) => {
  if (labelBtn2 === "Cadastrar") {
    return (
      <StyledBtn type="button" onClick={() => setIsOpenModalRegister(true)}>
        {children}
      </StyledBtn>
    );
  }
  return <StyledBtn type="button">{children}</StyledBtn>;
};
