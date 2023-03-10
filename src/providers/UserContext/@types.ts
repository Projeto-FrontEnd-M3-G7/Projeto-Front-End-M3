export interface iProvidersProps {
  children: React.ReactNode;
}
export interface iUserContext {
  isOpenModalLogin: boolean;
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalRegister: boolean;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalControlPanel: boolean;
  setIsOpenModalControlPanel: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalDeleteProduct: boolean;
  setIsOpenModalDeleteProduct: React.Dispatch<React.SetStateAction<boolean>>;
}
