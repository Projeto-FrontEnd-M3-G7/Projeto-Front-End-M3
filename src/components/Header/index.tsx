import { useState } from "react";
import { StyledHeader } from "./styles";
import { BtnLogin } from "../BtnLogin";
import { BtnRegister } from "../BtnRegister";
import { MenuMobile } from "../MenuMobile";
import { NavBar } from "../MenuMobile/NavBar";

export interface iBtnHeader {
  labelBtn1: string;
  labelBtn2: string;
}

export const Header = ({ labelBtn1, labelBtn2 }: iBtnHeader) => {
  const [showMenu, setShowMenu] = useState<string>("hidden");

  return (
    <StyledHeader>
      <div className="boxHeader">
        <div className="boxLogo">
          <img src="./src/assets/img/editLogo.png" alt="Logo da empresa" />
        </div>
        <div className="boxNav">
          <BtnLogin>{labelBtn1}</BtnLogin>
          <BtnRegister>{labelBtn2}</BtnRegister>
        </div>
        <div className="boxNavIcon">
          <MenuMobile setShowMenu={setShowMenu} />
        </div>
      </div>
      <div className={showMenu}>
        <NavBar />
      </div>
    </StyledHeader>
  );
};
