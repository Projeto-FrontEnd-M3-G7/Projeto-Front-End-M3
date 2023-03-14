import { iProduct } from '../../providers/ProductContext/@types';
import { MyCardContainer } from './style';

interface iProductProps {
    name?: string;
    description?: string;
    img?: string;
    acquired_Value?: string;
    sale_Value?: string;
    category?: string;
    userId?: number;
    id?: number;
    price?: number | string;

    key: number;
    product: iProduct;
}

export const MyProdutsCard = ({ product }: iProductProps) => {
    //console.log(product);

    return (
        <MyCardContainer>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </MyCardContainer>
    );
};
