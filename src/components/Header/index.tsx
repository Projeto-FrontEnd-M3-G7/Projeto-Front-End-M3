import { StyledHeader } from "./styles";
import { BtnLogin } from "../BtnLogin";
import { BtnRegister } from "../BtnRegister";

export const Header = () => {
  console.log("deletar depois...");

  return (
    <StyledHeader>
      <div className="boxLogo">
        <img src="./src/assets/img/editLogo.png" alt="Logo da empresa" />
      </div>
      <div className="boxNav">
        <BtnLogin>Login</BtnLogin>
        <BtnRegister>Cadastrar</BtnRegister>
      </div>
    </StyledHeader>
  );
};
