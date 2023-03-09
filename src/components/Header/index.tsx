import { useState } from "react";
import { StyledHeader } from "./styles";
import { BtnLogin } from "../BtnLogin";
import { BtnRegister } from "../BtnRegister";
import { MenuMobile } from "../MenuMobile";
import { NavBar } from "../MenuMobile/NavBar";
import { Categories } from "../Categories";

export interface iBtnHeader {
  labelBtn1: string;
  labelBtn2: string;
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({
  labelBtn1,
  labelBtn2,
  setIsOpenModalLogin,
  setIsOpenModalRegister,
}: iBtnHeader) => {
  const [showMenu, setShowMenu] = useState<string>("hidden");

  return (
    <StyledHeader>
      <div className="boxHeader">
        <div className="boxLogo">
          <img src="./src/assets/img/editLogo.png" alt="Logo da empresa" />
        </div>
        <div className="boxNav">
          <BtnLogin
            labelBtn1={labelBtn1}
            setIsOpenModalLogin={setIsOpenModalLogin}
          >
            {labelBtn1}
          </BtnLogin>
          <BtnRegister
            labelBtn2={labelBtn2}
            setIsOpenModalRegister={setIsOpenModalRegister}
          >
            {labelBtn2}
          </BtnRegister>
        </div>
        <div className="boxNavIcon">
          <MenuMobile setShowMenu={setShowMenu} />
        </div>
      </div>
      <div className={showMenu}>
        <NavBar />
        {showMenu === "showMenu" && <Categories />}
      </div>
    </StyledHeader>
  );
};
