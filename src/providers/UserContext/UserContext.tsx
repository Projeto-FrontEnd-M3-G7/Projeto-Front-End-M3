import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { iProvidersProps, iUser, iUserContext } from "./@types";
import { api } from "../../services/api";
import { iValuesRegisterForm } from "../../components/Modais/ModalRegister/@types";
import { IValuesLoginForm } from "../../components/Modais/ModalLogin/@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProvidersProps) => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);

  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@Click&Colect:TOKEN");

    if (token) {
      navigate("/shop");
    } else {
      navigate("/");
    }
  }, []);

  const userRegister = async (formData: iValuesRegisterForm) => {
    try {
      const response = await api.post("users", formData);
      toast.success("Registro realizado com sucesso!", {
        autoClose: 1000,
      });
      setIsOpenModalRegister(false);
      setIsOpenModalLogin(true);
    } catch (error) {
      toast.error(
        "E-mail já existente, tente cadastrar com um E-mail diferente!",
        {
          autoClose: 1000,
        }
      );
    }
  };

  const userLogin = async (formData: IValuesLoginForm) => {
    try {
      const response = await api.post("signin", formData);
      setUser(response.data.user);
      localStorage.setItem("@Click&Colect:TOKEN", response.data.accessToken);
      setIsOpenModalLogin(false);
      toast.success("Login realizado com sucesso!", {
        autoClose: 1000,
      });

      navigate("/shop");
    } catch (error) {
      toast.error("E-mail ou senha incorreto!", {
        autoClose: 1000,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        isOpenModalLogin,
        setIsOpenModalLogin,
        isOpenModalRegister,
        setIsOpenModalRegister,
        userLogin,
        userRegister,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
