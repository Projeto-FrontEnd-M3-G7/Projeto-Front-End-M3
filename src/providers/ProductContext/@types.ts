export interface iProductContextProps {
    children: React.ReactNode;
}

export interface iProduct {
    name: string;
    description: string;
    img: string;
    acquiredValue: number;
    saleValue: number;
    category: string;
    userId: string;
    id: number;
    price?: number | string;
}

export interface errorResponse {
    error: string;
}

export interface iSearchForm {
    category: string;
}

export interface iProductContext {
    products: iProduct[] | null;
    productsShop: () => Promise<void>;
    loading: boolean;
    setSearch: React.Dispatch<React.SetStateAction<iSearchForm | undefined>>;
    searchProducts: iProduct[] | undefined;
    categoriesProducts: () => Promise<void>;
    categories: [] | null;
    openModalSaibaMais: boolean;
    setOpenModalSaibaMais: React.Dispatch<React.SetStateAction<boolean>>;
    selectedProduct: iProduct | null;
    setSelectedProduct: React.Dispatch<React.SetStateAction<iProduct | null>>;
}
