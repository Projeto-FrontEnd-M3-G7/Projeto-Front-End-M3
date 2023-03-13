import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { iProvidersProps, iUser, iUserContext } from "./@types";
import { api } from "../../services/api";
import { iValuesRegisterForm } from "../../components/Modais/ModalRegister/@types";
import { IValuesLoginForm } from "../../components/Modais/ModalLogin/@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProvidersProps) => {
  const [isOpenModalSobreNos, setIsOpenModalSobreNos] = useState(false);
  const [isOpenModalPlanos, setIsOpenModalPlanos] = useState(false);
  const [isOpenModalContact, setIsOpenModalContact] = useState(false);
  const [isOpenModalFAQ, setIsOpenModalFAQ] = useState(false);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const [isOpenModalCreateProduct, setIsOpenModalCreateProduct] =
    useState(false);
  const [isOpenModalControlPanel, setIsOpenModalControlPanel] = useState(false);
  const [isOpenModalDeleteProduct, setIsOpenModalDeleteProduct] =
    useState(false);
  const [isOpenModalEditProduct, setIsOpenModalEditProduct] = useState(false);

  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@Click&Colect:TOKEN");
    const userId = localStorage.getItem("@Click&Colect:ID");

    if (token && userId) {
      const autoLogin = async () => {
        try {
          const response = await api.get(`users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          navigate("/");
        }
      };
      autoLogin();
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
      localStorage.setItem("@Click&Colect:ID", response.data.user.id);
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
        isOpenModalSobreNos,
        setIsOpenModalSobreNos,
        isOpenModalPlanos,
        setIsOpenModalPlanos,
        isOpenModalContact,
        setIsOpenModalContact,
        isOpenModalFAQ,
        setIsOpenModalFAQ,
        isOpenModalLogin,
        setIsOpenModalLogin,
        isOpenModalRegister,
        setIsOpenModalRegister,
        isOpenModalControlPanel,
        setIsOpenModalControlPanel,
        isOpenModalDeleteProduct,
        setIsOpenModalDeleteProduct,
        userLogin,
        userRegister,
        user,
        setIsOpenModalEditProduct,
        isOpenModalEditProduct,
        isOpenModalCreateProduct,
        setIsOpenModalCreateProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
