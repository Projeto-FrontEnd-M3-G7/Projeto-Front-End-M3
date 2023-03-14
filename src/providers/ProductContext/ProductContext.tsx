import { createContext, useContext, useState } from "react";
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
import { UserContext } from "../UserContext/UserContext";
import { iUserContext } from "../UserContext/@types";

export const ProductContext = createContext({} as iProductContext);

export const ProductProvider = ({ children }: iProductContextProps) => {

  const [products, setProducts] = useState<iProduct[] | null>(null);
  const [categories, setCategories] = useState<[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<iSearchForm>();

  const [userProducts, setUserProducts] = useState<iProduct[] | null>(null);
   const [openModalSaibaMais, setOpenModalSaibaMais] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<iProduct[] | null>(
    null)

  const {
    isOpenModalDeleteProduct,
    setIsOpenModalDeleteProduct,
    isOpenModalEditProduct,
    setIsOpenModalEditProduct,
  }: iUserContext = useContext(UserContext);

  const searchProducts = products?.filter((product) =>
    search === undefined
      ? true
      : product.category
          .toLowerCase()
          .includes(search.category.toLocaleLowerCase())



    const searchProducts = products?.filter((product) =>
        search === undefined
            ? true
            : product.category
                  .toLowerCase()
                  .includes(search.category.toLocaleLowerCase())
    );

    
  const productsUser = async () => {
    const token = localStorage.getItem("@Click&Colect:TOKEN");
    const userId = localStorage.getItem("@Click&Colect:ID");

    try {
      setLoading(true);
      const response = await api.get(`users/${userId}?_embed=products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserProducts(response.data.products);
    } catch (error) {
      const currentError = error as AxiosError<errorResponse>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: number) => {
    const token = localStorage.getItem("@Click&Colect:TOKEN");
    try {
      setLoading(true);
      const response = await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia deletada com sucesso!");
      setIsOpenModalDeleteProduct(!isOpenModalDeleteProduct);
    } catch (error) {
      const currentError = error as AxiosError<errorResponse>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = (id: number) => {
    const newListProduct = userProducts?.filter((product) => product.id !== id);
    if (newListProduct) {
      setUserProducts(newListProduct);
    }
  };

  const updateProduct = async (formDate: iProduct) => {
    const token = localStorage.getItem("@Click&Colect:TOKEN");
    console.log(formDate);
    try {
      const response = await api.patch(`/products/${formDate.id}`, formDate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia atualizada com sucesso!");

      setIsOpenModalEditProduct(!isOpenModalEditProduct);

      const newListProducts = userProducts?.map((product) => {
        if (product.id === formDate.id) {
          return { ...product, ...formDate };
        }
        return product;
      });

      if (newListProducts) {
        setUserProducts(newListProducts);
      }
    } catch (error) {
      const currentError = error as AxiosError<errorResponse>;
      toast.error(currentError.response?.data.error);
    }
  };


    const productsShop = async () => {
        try {
            setLoading(true);
            const response = await api.get('products');
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
            const response = await api.get('categories');
            setCategories(response.data);
        } catch (error) {
            const currentError = error as AxiosError<errorResponse>;
            toast.error(currentError.response?.data.error);
        }
    };
    

  return (
    <ProductContext.Provider
      value={{
        updateProduct,
        deleteProduct,
        removeProduct,
        productsUser,
        userProducts,
        products,
        productsShop,
        loading,
        setSearch,
        searchProducts,
        categoriesProducts,
        categories,
        openModalSaibaMais,
        setOpenModalSaibaMais,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );

};
