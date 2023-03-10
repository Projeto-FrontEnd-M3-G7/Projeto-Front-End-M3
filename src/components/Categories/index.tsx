import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledAside } from "./styles";
import { ProductContext } from "../../providers/ProductContext/ProductContext";

export interface iFormData {
  category: string;
}

export const Categories = () => {
  const { categories, setSearch } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>();

  const submit: SubmitHandler<iFormData> = async (data) => {
    setSearch(data);
  };

  const searchCategory = async (data: iFormData) => {
    setSearch(data);
  };

  return (
    <StyledAside>
      <h2>Categorias</h2>
      <form onChange={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="buscar categoria"
          {...register("category")}
        />
        {errors.category && <p>Produto não encontrado!</p>}
        <button type="submit">
          <img
            src="./src/assets/img/icons8-pesquisar.png"
            alt="botão de busca"
          />
        </button>
      </form>
      <ul>
        {categories?.map((category) => (
          <li>
            <button
              className="btnCategory"
              type="button"
              onClick={() => searchCategory({ category })}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </StyledAside>
  );
};
