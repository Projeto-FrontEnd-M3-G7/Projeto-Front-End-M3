import { StyledFooter } from "./styles";

export const Footer = () => {
  console.log("deletar depois...");

  return (
    <StyledFooter>
      <div className="boxInfoRedes">
        <img
          src="./src/assets/img/icons8-whatsapp.svg"
          alt="Logo do whatsapp"
        />
        <img src="./src/assets/img/icons8-youtube.svg" alt="Logo do Youtube" />
        <img
          src="./src/assets/img/icons8-facebook.svg"
          alt="Logo do Facebook"
        />
        <img
          src="./src/assets/img/icons8-instagram.svg"
          alt="Logo do Instagram"
        />
      </div>
      <div className="boxContact">
        <p>FAQ</p>
        <p>Contact</p>
        <p>Planos</p>
        <span>|</span>
        <p>Sobre nós</p>
      </div>
    </StyledFooter>
  );
};
