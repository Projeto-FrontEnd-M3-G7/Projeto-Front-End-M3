import { StyledButtonContainer, StyledLi } from "./styles";
import { iProduct } from "../../../providers/ProductContext/@types";
import { BtnShop } from "../../BtnShop";

interface iProductsProps {
  product: iProduct;
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  showButtons: boolean;
}

export const ProductCard = ({
  product,
  showButtons,
  children,
  setIsOpenModalLogin,
}: iProductsProps) => (
  <StyledButtonContainer>
    <StyledLi>
      <button
        className="btnCard"
        type="button"
        onClick={() => setIsOpenModalLogin(true)}
      >
        <img src={product.img} alt={product.name} />
        <p>{product.description}</p>
        <span>R$ {product.saleValue.toFixed(2)}</span>
        {children && children}
      </button>
    </StyledLi>

    {showButtons && (
      <div>
        <BtnShop text="+ Saiba mais" product={product} />
        <BtnShop text="Adicionar" product={product} />
      </div>
    )}
  </StyledButtonContainer>
);
