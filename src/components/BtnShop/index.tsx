import { useContext } from "react";
import { StyledBtnShop } from "./styles";
import { iProduct } from "../../providers/ProductContext/@types";
import { CartContext } from "../../providers/CartContext/CartContext";

interface iBtnShop {
  text: string;
  product: iProduct;
}

export const BtnShop = ({ text, product }: iBtnShop) => {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledBtnShop
      type="button"
      onClick={() => text === "Adicionar" && addToCart(product)}
    >
      {text}
    </StyledBtnShop>
  );
};
