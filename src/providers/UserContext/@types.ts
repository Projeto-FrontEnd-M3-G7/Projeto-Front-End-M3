export interface iProvidersProps {
  children: React.ReactNode;
}
export interface iUserContext {
  isOpenModalLogin: boolean;
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalRegister: boolean;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}
