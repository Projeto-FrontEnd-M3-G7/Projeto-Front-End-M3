import { useContext } from "react";
import { toast } from "react-toastify";
import { CartProductCard } from "./CartProductCard";
import { StyledCartProductList } from "./styles";
import { CartContext } from "../../../../providers/CartContext/CartContext";

export const CartProductList = () => {
  const { cartProductsList, valueToCart, setCartProductList } =
    useContext(CartContext);

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
      <button
        className="finalizar"
        type="button"
        onClick={() => {
          toast.success(
            `Obrigado por finalizar a sua compra no valor de R$ ${valueToCart}. Volte sempre!`
          );
          setCartProductList([]);
        }}
      >
        Finalizar Compra
      </button>
      <button
        type="button"
        onClick={() => {
          setCartProductList([]);
          toast.success("Esvaziamos a sua sacola, adicione novos itens!");
        }}
      >
        Remover Todos
      </button>
    </StyledCartProductList>
  );
};
