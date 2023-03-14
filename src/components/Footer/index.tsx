import { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledFooter } from "./styles";
import { UserContext } from "../../providers/UserContext/UserContext";

export const Footer = () => {
  const {
    setIsOpenModalFAQ,
    setIsOpenModalContact,
    setIsOpenModalPlanos,
    setIsOpenModalSobreNos,
  } = useContext(UserContext);

  return (
    <StyledFooter>
      <div className="boxInfoRedes">
        <Link to="https://www.whatsapp.com/?lang=pt_br" target="_blank">
          <img src="./img/icons8-whatsapp.svg" alt="Logo do whatsapp" />
        </Link>
        <Link to="https://www.youtube.com/?gl=BR&hl=PT" target="_blank">
          <img src="./img/icons8-youtube.svg" alt="Logo do Youtube" />
        </Link>
        <Link to="https://pt-br.facebook.com/" target="_blank">
          <img src="./img/icons8-facebook.svg" alt="Logo do Facebook" />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <img src="./img/icons8-instagram.svg" alt="Logo do Instagram" />
        </Link>
      </div>
      <div className="boxContact">
        <button
          className="btnContact"
          type="button"
          onClick={() => {
            setIsOpenModalFAQ(true);
          }}
        >
          <p>FAQ</p>
        </button>
        <button
          className="btnContact"
          type="button"
          onClick={() => {
            setIsOpenModalContact(true);
          }}
        >
          <p>Contact</p>
        </button>
        <button
          className="btnContact"
          type="button"
          onClick={() => {
            setIsOpenModalPlanos(true);
          }}
        >
          <p>Planos</p>
        </button>
        <span className="btnContact">|</span>
        <button
          className="btnContact"
          type="button"
          onClick={() => {
            setIsOpenModalSobreNos(true);
          }}
        >
          <p>Sobre nós</p>
        </button>
      </div>
    </StyledFooter>
  );
};
