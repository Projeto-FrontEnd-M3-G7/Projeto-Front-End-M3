import { ProductCard } from "./ProductCard";
import { StyledUl } from "./styles";

export const ProductList = () => {
  console.log("aplicar a lógica, na ul inserir o loading e o map");

  return (
    <StyledUl>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </StyledUl>
  );
};
