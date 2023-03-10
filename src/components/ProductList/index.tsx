import { useContext } from "react";
import { StyledUl } from "./styles";
import { ProductCard } from "./ProductCard";
import { ProductContext } from "../../providers/ProductContext/ProductContext";
import { UserContext } from "../../providers/UserContext/UserContext";

interface iPropsProduct {
  showButtons: boolean;
}

export const ProductList = ({ showButtons }: iPropsProduct) => {
  const { setIsOpenModalLogin } = useContext(UserContext);
  const { searchProducts, loading } = useContext(ProductContext);

  return (
    <StyledUl>
      {loading ? (
        <div className="boxLoading">
          <img src="./src/assets/img/Spinner-1s-200px.svg" alt="Loading..." />
        </div>
      ) : (
        searchProducts?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showButtons={showButtons}
            setIsOpenModalLogin={setIsOpenModalLogin}
          />
        ))
      )}
    </StyledUl>
  );
};
