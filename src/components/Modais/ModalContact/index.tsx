import { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledBoxContact } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { StyledBoxDiv } from "../styles";

export const ModalContact = () => {
  const { setIsOpenModalContact } = useContext(UserContext);

  return (
    <StyledBoxDiv>
      <dialog>
        <div className="headerModal">
          <h2>Contatos!</h2>
          <button type="button" onClick={() => setIsOpenModalContact(false)}>
            <span>X</span>
          </button>
        </div>
        <StyledBoxContact>
          <Link to="https://www.whatsapp.com/?lang=pt_br" target="_blank">
            <img src="./img/icons8-whatsapp.svg" alt="Logo do whatsapp" />
            <span>nosso whatsapp</span>
          </Link>

          <Link to="https://www.youtube.com/?gl=BR&hl=PT" target="_blank">
            <img src="./img/icons8-youtube.svg" alt="Logo do Youtube" />
            <span>youtube</span>
          </Link>

          <Link to="https://pt-br.facebook.com/" target="_blank">
            <img src="./img/icons8-facebook.svg" alt="Logo do Facebook" />
            <span>facebook</span>
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <img src="./img/icons8-instagram.svg" alt="Logo do Instagram" />
            <span>instagram</span>
          </Link>
          <div>
            <img src="./img/icons8-tel-58.png" alt="Logo do Instagram" />
            <span>(51) 9 8013 58795</span>
          </div>
        </StyledBoxContact>
      </dialog>
    </StyledBoxDiv>
  );
};
