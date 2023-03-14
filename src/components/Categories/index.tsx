import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { StyledAside } from "./styles";
import { ProductContext } from "../../providers/ProductContext/ProductContext";

export interface iFormData {
  category: string;
}

export const Categories = () => {
  const { categories, setSearch } = useContext(ProductContext);

  const all = undefined;

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

  const searchCategoryAll = async () => {
    setSearch(all);
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
        <li key={uuidv4()}>
          <button
            className="btnCategory"
            type="button"
            onClick={() => searchCategoryAll()}
          >
            Todos
          </button>
        </li>
        {categories?.map((category) => (
          <li key={uuidv4()}>
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
