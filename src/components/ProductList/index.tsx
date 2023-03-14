import { useContext } from "react";
import Slider from "react-slick";
import { StyledUl } from "./styles";
import { ProductCard } from "./ProductCard";
import { ProductContext } from "../../providers/ProductContext/ProductContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface iPropsProduct {
  showButtons: boolean;
}

export const ProductList = ({ showButtons }: iPropsProduct) => {
  const { setIsOpenModalLogin } = useContext(UserContext);
  const { searchProducts, loading } = useContext(ProductContext);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1269,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1052,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledUl>
      {loading ? (
        <div className="boxLoading">
          <img src="./img/Spinner-1s-200px.svg" alt="Loading..." />
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {searchProducts?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showButtons={showButtons}
              setIsOpenModalLogin={setIsOpenModalLogin}
            />
          ))}
        </Slider>
      )}
    </StyledUl>
  );
};
