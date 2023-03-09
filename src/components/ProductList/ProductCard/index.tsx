import { StyledButtonContainer, StyledLi } from "./styles";
import { iProduct } from "../../../providers/ProductContext/@types";
import { BtnShop } from "../../BtnShop";

interface iProductsProps {
  product: iProduct;
}

export const ProductCard = ({
  product,
  showButtons,
  children,
}: iProductsProps) => (
  <StyledButtonContainer>
    <StyledLi>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <span>R$ {product.sale_Value}</span>
      {children && children}
    </StyledLi>
    {showButtons && (
      <div>
        <BtnShop text="+ Saiba mais" />
        <BtnShop text="Adicionar" />
      </div>
    )}
  </StyledButtonContainer>
);
