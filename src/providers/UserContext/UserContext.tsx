import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iProvidersProps, iUserContext } from "./@types";
import { api } from "../../services/api";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProvidersProps) => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  return (
    <UserContext.Provider
      value={{
        isOpenModalLogin,
        setIsOpenModalLogin,
        isOpenModalRegister,
        setIsOpenModalRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
