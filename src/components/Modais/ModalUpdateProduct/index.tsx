import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledCarDiv, StyledTextarea } from "./styles";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { Input } from "../../Input";
import { schema } from "../validator";
import { iProduct } from "../../../providers/ProductContext/@types";
import { ProductContext } from "../../../providers/ProductContext/ProductContext";

export const ModalUpdateProduct = () => {
  const { setIsOpenModalEditProduct } = useContext(UserContext);
  const { updateProduct } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProduct>({ resolver: yupResolver(schema) });

  const submit: SubmitHandler<iProduct> = async (data) => {
    let formDate: iProduct = [];

    if (data.name) {
      formDate = { ...formDate, name: data.name };
    }

    if (data.description) {
      formDate = { ...formDate, description: data.description };
    }

    if (data.img) {
      formDate = { ...formDate, img: data.img };
    }

    if (data.saleValue) {
      formDate = { ...formDate, saleValue: data.saleValue };
    }

    if (data.id) {
      formDate = { ...formDate, id: data.id };
    }

    updateProduct(formDate);
  };

  return (
    <StyledCarDiv>
      <dialog>
        <div className="headerModal">
          <h3>Editar Produto</h3>
          <button
            type="button"
            onClick={() => setIsOpenModalEditProduct(false)}
            className="span"
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="name"
            placeholder="Nome do Produto"
            register={register("name")}
            error={errors.name}
          />
          <StyledTextarea
            name="description"
            placeholder="Descrição do Produto"
            {...register("description")}
            error={errors.description}
          />
          <Input
            type="img"
            placeholder="Imagem do Produto (url)"
            register={register("img")}
            error={errors.img}
          />
          <Input
            type="saleValue"
            placeholder="Valor para Venda"
            register={register("saleValue")}
            error={errors.saleValue}
          />
          <Input
            type="id"
            placeholder="Necessário informar o id do produto para sua atualização"
            register={register("id")}
            error={errors.id}
          />
          <div>
            <button className="cancelar" type="submit">
              Atualizar Produto
            </button>
          </div>
        </form>
      </dialog>
    </StyledCarDiv>
  );
};
