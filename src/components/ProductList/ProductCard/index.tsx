import { StyledLi } from "./styles";

export const ProductCard = () => {
  console.log("aplicar a lógica...");

  return (
    <StyledLi>
      <img src="./src/assets/img/jaqueta 2.svg" alt="imagem do produto" />
      <p>Descrição do Produto Lorem ipsum dolor sit amet consectetur</p>
      <span>R$ 180,00</span>
    </StyledLi>
  );
};
