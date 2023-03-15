import { MyCardContainer } from './style';
import { iProduct } from '../../providers/ProductContext/@types';

interface iProductsProps {
    product: iProduct;
}

export const MyProdutsCard = ({ product }: iProductsProps) => (
    <MyCardContainer>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.saleValue.toFixed(2)}</p>
    </MyCardContainer>
);
