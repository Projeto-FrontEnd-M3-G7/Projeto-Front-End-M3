import { StyledHeaderAdmin } from "./styles";
import { BtnLogout } from "../../BtnLogout";

export const HeaderAdmin = () => (
  <StyledHeaderAdmin>
    <div className="boxLogo">
      <img src="./img/editLogo.png" alt="Logo da empresa" />
    </div>
    <div className="boxNav">
      <BtnLogout>Logout</BtnLogout>
    </div>
  </StyledHeaderAdmin>
);
