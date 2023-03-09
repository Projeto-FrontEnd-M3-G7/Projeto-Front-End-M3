import { StyledHeaderAdmin } from "./styles";
import { BtnLogout } from "../../BtnLogout";

export const HeaderAdmin = () => {
  console.log("deletar depois...");

  return (
    <StyledHeaderAdmin>
      <div className="boxLogo">
        <img src="./src/assets/img/editLogo.png" alt="Logo da empresa" />
      </div>
      <div className="boxNav">
        <BtnLogout>Logout</BtnLogout>
      </div>
    </StyledHeaderAdmin>
  );
};
