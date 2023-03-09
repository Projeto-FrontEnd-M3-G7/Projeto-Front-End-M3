import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import {
  errorResponse,
  iProduct,
  iProductContext,
  iProductContextProps,
  iSearchForm,
} from "./@types";
import { api } from "../../services/api";

export const ProductContext = createContext({} as iProductContext);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [products, setProducts] = useState<iProduct[] | null>(null);
  const [categories, setCategories] = useState<[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<iSearchForm>();

  const searchProducts = products?.filter((product) =>
    search === undefined
      ? true
      : product.category
          .toLowerCase()
          .includes(search.category.toLocaleLowerCase())
  );

  const productsShop = async () => {
    try {
      setLoading(true);
      const response = await api.get("products");
      setProducts(response.data);
    } catch (error) {
      const currentError = error as AxiosError<errorResponse>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };

  const categoriesProducts = async () => {
    try {
      const response = await api.get("categories");
      setCategories(response.data);
    } catch (error) {
      const currentError = error as AxiosError<errorResponse>;
      toast.error(currentError.response?.data.error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productsShop,
        loading,
        setSearch,
        searchProducts,
        categoriesProducts,
        categories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
