export interface iProductContextProps {
  children: React.ReactNode;
}

export interface iProduct {
  name: string;
  description: string;
  img: string;
  acquiredValue: number;
  saleValue: number;
  quanty: number;
  category: string;
  userId: string;
  id: number;
}

export interface errorResponse {
  error: string;
}

export interface iSearchForm {
  category: string;
}

export interface iProductContext {
  updateProduct: (data: iProduct) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  removeProduct: (id: number) => void;
  productsUser: () => Promise<void>;
  userProducts: iProduct[] | null;
  products: iProduct[] | null;
  productsShop: () => Promise<void>;
  loading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<iSearchForm | undefined>>;
  searchProducts: iProduct[] | undefined;
  categoriesProducts: () => Promise<void>;
  categories: [] | null;
  openModalSaibaMais: boolean;
  setOpenModalSaibaMais: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: iProduct | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<iProduct | null>>;
}
