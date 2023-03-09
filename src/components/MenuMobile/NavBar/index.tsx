import { StyledNav } from "./styles";
import { BtnLogin } from "../../BtnLogin";
import { BtnRegister } from "../../BtnRegister";

export const NavBar = () => {
  console.log("logica");

  return (
    <StyledNav>
      <BtnLogin>Login</BtnLogin>
      <BtnRegister>Cadastrar</BtnRegister>
    </StyledNav>
  );
};
