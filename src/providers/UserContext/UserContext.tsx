import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iProvidersProps, iUserContext } from "./@types";
import { api } from "../../services/api";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProvidersProps) => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const [isOpenModalControlPanel, setIsOpenModalControlPanel] = useState(false);
  const [isOpenModalDeleteProduct, setIsOpenModalDeleteProduct] =
    useState(false);

  return (
    <UserContext.Provider
      value={{
        isOpenModalLogin,
        setIsOpenModalLogin,
        isOpenModalRegister,
        setIsOpenModalRegister,
        isOpenModalControlPanel,
        setIsOpenModalControlPanel,
        isOpenModalDeleteProduct,
        setIsOpenModalDeleteProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
