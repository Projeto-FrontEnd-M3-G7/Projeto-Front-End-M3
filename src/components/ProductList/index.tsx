import { ProductCard } from "./ProductCard";
import { StyledUl } from "./styles";

export const ProductList = ({ showButtons }) => {
  console.log("aplicar a lógica, na ul inserir o loading e o map");

  return (
    <StyledUl>
      <ProductCard showButtons={showButtons} />
      <ProductCard showButtons={showButtons} />
      <ProductCard showButtons={showButtons} />
      <ProductCard showButtons={showButtons} />
      <ProductCard showButtons={showButtons} />
      <ProductCard showButtons={showButtons} />
      <ProductCard showButtons={showButtons} />
    </StyledUl>
  );
};
