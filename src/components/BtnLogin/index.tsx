import { StyledBtn } from "./styles";

interface iBtnProps {
  children: string;
  labelBtn1: string;
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BtnLogin = ({
  children,
  labelBtn1,
  setIsOpenModalLogin,
}: iBtnProps) => {
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
