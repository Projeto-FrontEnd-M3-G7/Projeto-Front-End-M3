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
            `Finalizamos o seu pedido no valor de R$ ${valueToCart
              .toFixed(2)
              .replaceAll(".", ",")}. Obrigado!`,
            {
              autoClose: 1000,
            }
          );
          setCartProductList([]);
        }}
      >
        Finalizar Compra
      </button>
      <button
        type="button"
        onClick={() => {
          toast.success(
            "Pordutos removidos, seu carrinho agora está vazio, adicione novos produtos!",
            {
              autoClose: 1000,
            }
          );
          setCartProductList([]);
        }}
      >
        Remover Todos
      </button>
    </StyledCartProductList>
  );
};
