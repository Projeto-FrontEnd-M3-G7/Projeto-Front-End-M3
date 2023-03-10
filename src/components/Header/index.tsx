import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { StyledHeader } from "./styles";
import { BtnLogin } from "../BtnLogin";
import { BtnRegister } from "../BtnRegister";
import { Categories } from "../Categories";

export interface iBtnHeader {
  labelBtn1: string;
  labelBtn2: string;
}

export const Header = ({ labelBtn1, labelBtn2 }: iBtnHeader) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledHeader>
      <div className="boxHeader">
        <div className="boxLogo">
          <img
            className="logoImg"
            src="./src/assets/img/editLogo.png"
            alt="Logo da empresa"
          />
          <button
            type="button"
            className={showMenu ? "hamburguer fecharMenu" : "hamburguer"}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <IoMdClose className="img" />
            ) : (
              <GiHamburgerMenu className="img" />
            )}
          </button>
        </div>
        <div className={showMenu ? "boxNav" : "boxNav hidden"}>
          <BtnLogin labelBtn1={labelBtn1}>{labelBtn1}</BtnLogin>
          <BtnRegister labelBtn2={labelBtn2}>{labelBtn2}</BtnRegister>
        </div>
        {showMenu && (
          <div className="categories">
            <Categories />
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
