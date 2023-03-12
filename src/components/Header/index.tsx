import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { StyledHeader } from "./styles";
import { BtnLogin } from "../BtnLogin";
import { BtnRegister } from "../BtnRegister";
import { Categories } from "../Categories";
import { BtnProfile } from "../BtnProfile";
import { BtnLogout } from "../BtnLogout";
import { BtnCart } from "../BtnCart";
import { UserContext } from "../../providers/UserContext/UserContext";
import { ModalCart } from "../Modais/ModalCart";

interface iBtnHeader {
  showButtons?: boolean;
  showLoginAndRegister?: boolean;
  labelBtn1: string;
  labelBtn2: string;
}

export const Header = ({
  showButtons = false,
  showLoginAndRegister = true,
  labelBtn1,
  labelBtn2,
}: iBtnHeader) => {
  const [showMenu, setShowMenu] = useState(false);
  const { isOpenModalCart, setIsOpenModalCart } = useContext(UserContext);

  return (
    <StyledHeader>
      {isOpenModalCart && <ModalCart />}
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
          {showLoginAndRegister && (
            <>
              <BtnLogin labelBtn1={labelBtn1}>{labelBtn1}</BtnLogin>
              <BtnRegister labelBtn2={labelBtn2}>{labelBtn2}</BtnRegister>
            </>
          )}
          {showButtons && (
            <>
              <BtnProfile>Profile</BtnProfile>
              <BtnLogout>Logout</BtnLogout>
              <BtnCart event={() => setIsOpenModalCart(true)} />
            </>
          )}
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
