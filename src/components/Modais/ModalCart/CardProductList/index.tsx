import { useContext } from "react";
import { CartProductCard } from "./CartProductCard";
import { StyledCartProductList } from "./styles";
import { CartContext } from "../../../../providers/CartContext/CartContext";

export const CartProductList = () => {
  const { cartProductsList, valueToCart } = useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>
        {cartProductsList.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>
      <p />
      <div className="totalBox">
        <h3>
          <strong>Total</strong>
        </h3>
        <p className="total">
          R$ {valueToCart.toFixed(2).replaceAll(".", ",")}
        </p>
      </div>
      <button className="finalizar" type="button">
        Finalizar Compra
      </button>
      <button type="button">Remover Todos</button>
    </StyledCartProductList>
  );
};
