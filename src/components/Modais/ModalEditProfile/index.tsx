import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledBoxDiv } from "../styles";
import { Input } from "../../Input";
import { Select } from "../../Select/styles";
import { UserContext } from "../../../providers/UserContext/UserContext";

const formSchemaEdit = yup.object().shape({
  name: yup.string().required("É obrigatório digitar um nome."),

  email: yup
    .string()
    .required("É obrigatório digitar um E-mail.")
    .email("E-mail inválido"),

  password: yup
    .string()
    .required("É obrigatório digitar uma senha.")

    .matches(/[A-Z]/, "É obrigatório pelo menos uma letra maiúscula.")
    .matches(/[a-z]/, "É obrigatório pelo menos uma letra minúscula.")
    .matches(/(\d)/, "É obrigatório pelo menos um número.")
    .matches(/(\W|_)/, "É obrigatório pelo menos um caractere especial.")
    .matches(/.{8,}/, "A senha deve conter no mínimo 8 caracteres"),

  colaborador: yup.string(),
});

export const ModalEditProfile = () => {
  const { openEdit, setOpenEdit, userEdit } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaEdit),
  });

  return (
    <StyledBoxDiv>
      <dialog>
        <div className="headerModal">
          <h2>Editar Perfil</h2>
          <button
            className="closeModal"
            onClick={() => setOpenEdit(!openEdit)}
            type="button"
          >
            X
          </button>
        </div>
        <form
          className="formModal"
          onSubmit={handleSubmit((data) => userEdit(data))}
        >
          <Input placeholder="nome" type="text" register={register("name")} />
          <p>{errors.email?.message}</p>

          <Input
            placeholder="seu e-mail"
            type="email"
            register={register("email")}
          />
          <p>{errors.email?.message}</p>

          <Input
            placeholder="nova senha"
            type="password"
            register={register("password")}
          />
          <p>{errors.email?.message}</p>

          <Select {...register("colaborador")}>
            <option value="true">Deseja me tornar um vendedor</option>
            <option value="false">Deseja ser consumidor</option>
          </Select>
          <button type="submit">Editar perfil</button>
        </form>
      </dialog>
    </StyledBoxDiv>
  );
};
