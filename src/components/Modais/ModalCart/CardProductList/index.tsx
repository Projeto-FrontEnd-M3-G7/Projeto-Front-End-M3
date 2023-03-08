import { CartProductCard } from "./CartProductCard";
import { StyledCartProductList } from "./styles";

export const CartProductList = () => (
  <StyledCartProductList>
    <ul>
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
    </ul>
    <p />
    <div className="totalBox">
      <h3>
        <strong>Total</strong>
      </h3>
      <p className="total">R$ 14,50</p>
    </div>
    <button className="finalizar" type="button">
      Finalizar Compra
    </button>
    <button type="button">Remover Todos</button>
  </StyledCartProductList>
);
