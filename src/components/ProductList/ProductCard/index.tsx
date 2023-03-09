import { StyledLi } from "./styles";
import { iProduct } from "../../../providers/ProductContext/@types";

interface iProductsProps {
  product: iProduct;
}

export const ProductCard = ({ product }: iProductsProps) => (
  <StyledLi>
    <img src={product.img} alt={product.name} />
    <p>{product.description}</p>
    <span>R$ {product.sale_Value}</span>
  </StyledLi>
);
