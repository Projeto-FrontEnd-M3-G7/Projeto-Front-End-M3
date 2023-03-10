export interface iProductContextProps {
  children: React.ReactNode;
}

export interface iProduct {
  name: string;
  description: string;
  img: string;
  acquiredValue: number;
  saleValue: number;
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
  products: iProduct[] | null;
  productsShop: () => Promise<void>;
  loading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<iSearchForm | undefined>>;
  searchProducts: iProduct[] | undefined;
  categoriesProducts: () => Promise<void>;
  categories: [] | null;
}
