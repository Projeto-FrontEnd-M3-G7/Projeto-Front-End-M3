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
}

export const MyProdutsCard = ({ product }: iProductProps) => {
    console.log(product);

    return (
        <MyCardContainer>
            <button className="infoProducts">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </button>
        </MyCardContainer>
    );
};
