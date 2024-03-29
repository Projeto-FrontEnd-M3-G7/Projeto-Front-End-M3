import { iProduct } from "../ProductContext/@types";

export interface iProvidersProps {
  children: React.ReactNode;
}

export interface iCartContext {
  cartProductsList: iProduct[] | [];
  setCartProductList: React.Dispatch<React.SetStateAction<iProduct[]>>;
  addToCart: (product: iProduct) => void;
  valueToCart: number;
  modalCartIsOpen: boolean;
  setModalCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  removeToCart: (product: iProduct) => void;
}
