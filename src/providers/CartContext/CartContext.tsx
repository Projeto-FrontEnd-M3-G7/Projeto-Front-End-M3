import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iCartContext, iProvidersProps } from "./@types";
import { iProduct } from "../ProductContext/@types";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iProvidersProps) => {
  const [cartProductsList, setCartProductList] = useState<iProduct[] | []>([]);
  const [modalCartIsOpen, setModalCartIsOpen] = useState(false);
  const [valueToCart, setValueToCart] = useState(0);

  useEffect(() => {
    const addValueToCart = () => {
      const value = cartProductsList.reduce(
        (accumulator: number, currentValue: iProduct) =>
          accumulator + currentValue.saleValue,
        0
      );

      setValueToCart(value);
    };

    addValueToCart();
  }, [cartProductsList]);

  const addToCart = (product: iProduct) => {
    const productExistent = cartProductsList.find(
      (prod) => prod.id === product.id
    );

    if (productExistent) {
      toast.error("produto existente no carrinho!", {
        autoClose: 1000,
      });

      return;
    }

    setCartProductList([...cartProductsList, product]);
    toast.success("produto adicionado ao carrinho!", {
      autoClose: 1000,
    });
  };

  const removeToCart = (product: iProduct) => {
    const removeProduct = cartProductsList.filter(
      (prod) => prod.id !== product.id
    );
    setCartProductList(removeProduct);
  };

  return (
    <CartContext.Provider
      value={{
        cartProductsList,
        addToCart,
        valueToCart,
        modalCartIsOpen,
        setModalCartIsOpen,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
