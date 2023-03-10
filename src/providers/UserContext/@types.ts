import { IValuesLoginForm } from "../../components/Modais/ModalLogin/@types";
import { iValuesRegisterForm } from "../../components/Modais/ModalRegister/@types";

export interface iUser {
  email: string;
  name: string;
  age: number;
  id: number;
}

export interface iProvidersProps {
  children: React.ReactNode;
}

export interface iUserContext {
  isOpenModalLogin: boolean;
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalRegister: boolean;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  userLogin: (formData: IValuesLoginForm) => Promise<void>;
  userRegister: (formData: iValuesRegisterForm) => Promise<void>;
  user: iUser | null;
}
