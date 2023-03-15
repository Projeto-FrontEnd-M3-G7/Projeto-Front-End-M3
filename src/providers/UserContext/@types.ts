import { iValuesEditForm } from '../../components/Modais/ModalEditProfile/@types';
import { IValuesLoginForm } from '../../components/Modais/ModalLogin/@types';
import { iValuesRegisterForm } from '../../components/Modais/ModalRegister/@types';

export interface iUser {
    email: string;
    name: string;
    age?: number;
    id: number;
    colaborador: string;
}

export interface iProvidersProps {
    children: React.ReactNode;
}

export interface iUserContext {
    isOpenModalSobreNos: boolean;
    setIsOpenModalSobreNos: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalPlanos: boolean;
    setIsOpenModalPlanos: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalContact: boolean;
    setIsOpenModalContact: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalFAQ: boolean;
    setIsOpenModalFAQ: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalLogin: boolean;
    setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalRegister: boolean;
    setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
    userLogin: (formData: IValuesLoginForm) => Promise<void>;
    userRegister: (formData: iValuesRegisterForm) => Promise<void>;
    userEdit: (formData: iValuesEditForm) => Promise<void>;
    user: iUser;
    isOpenModalControlPanel: boolean;
    setIsOpenModalControlPanel: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalDeleteProduct: boolean;
    setIsOpenModalDeleteProduct: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalEditProduct: boolean;
    setIsOpenModalEditProduct: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalCreateProduct: boolean;
    setIsOpenModalCreateProduct: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenModalCart: boolean;
    setIsOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>;
    openEdit: boolean;
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
