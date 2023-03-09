import { useState } from "react";
import { StyledMenu } from "./styles";

interface iProps {
  setShowMenu: React.Dispatch<React.SetStateAction<string>>;
}
export const MenuMobile = ({ setShowMenu }: iProps) => {
  const [btnMenu, setBtnMenu] = useState(false);

  const openMenu = () => {
    if (btnMenu) {
      setShowMenu("hidden");
    } else {
      setShowMenu("showMenu");
    }
  };

  return (
    <StyledMenu>
      <button
        type="button"
        onClick={() => {
          setBtnMenu(!btnMenu);
          openMenu();
        }}
      >
        {btnMenu === false ? (
          <img
            src="./src/assets/img/icons8-icon_menu.png"
            alt="Menu de navegaçãoLogo da empresa"
          />
        ) : (
          <span>X</span>
        )}
      </button>
    </StyledMenu>
  );
};
