import { useNavigate, Navigate } from "react-router-dom";
import { MyCardContainer } from "./style";
import { iProduct } from "../../providers/ProductContext/@types";

interface iProductsProps {
  product: iProduct;
}

export const MyProdutsCard = ({ product }: iProductsProps) => {
  const navigate = useNavigate();

  const adminPage = () => {
    navigate("/admin-page");
  };

  return (
    <MyCardContainer>
      <button
        type="button"
        className="infoProducts"
        onClick={() => {
          adminPage();
        }}
      >
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.saleValue.toFixed(2)}</p>
      </button>
    </MyCardContainer>
  );

};