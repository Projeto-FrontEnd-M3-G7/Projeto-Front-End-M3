export interface iModalLogin {
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IValuesLoginForm {
  email: string;
  password: string;
}
