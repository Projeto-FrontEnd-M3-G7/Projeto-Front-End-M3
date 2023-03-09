import { StyledButtonContainer, StyledLi } from "./styles";
import { BtnShop } from "../../BtnShop";

export const ProductCard = ({ showButtons }) => {
  console.log("aplicar a lógica...");

  return (
    <StyledButtonContainer>
      <StyledLi>
        <img src="./src/assets/img/jaqueta 2.svg" alt="imagem do produto" />
        <p>Descrição do Produto Lorem ipsum dolor sit amet consectetur</p>
        <span>R$ 180,00</span>
      </StyledLi>
      {showButtons && (
        <div>
          <BtnShop text="+ Saiba mais" />
          <BtnShop text="Adicionar" />
        </div>
      )}
    </StyledButtonContainer>
  );
};
