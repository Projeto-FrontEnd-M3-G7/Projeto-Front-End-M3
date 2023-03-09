import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iModalLogin, IValuesLoginForm } from "./@types";
import { StyledBoxDiv } from "../styles";
import { Input } from "../../Input";
import { formSchemaLogin } from "../schemas";

export const ModalLogin = ({
  setIsOpenModalLogin,
  setIsOpenModalRegister,
}: iModalLogin) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValuesLoginForm>({
    resolver: yupResolver(formSchemaLogin),
  });
  return (
    <StyledBoxDiv>
      <dialog>
        <div className="headerModal">
          <h2>Login</h2>
          <button type="button" onClick={() => setIsOpenModalLogin(false)}>
            <span>X</span>
          </button>
        </div>
        <form
          className="formModal"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <p>Preencha os campos para realizar login</p>
          <Input
            type="text"
            placeholder="Digite o seu E-mail"
            register={register("email")}
          />
          {errors.email?.message}
          <Input
            type="password"
            placeholder="digite a sua senha"
            register={register("password")}
          />
          {errors.password?.message}
          <button type="submit">login</button>
          <span>ou</span>
          <button
            className="button"
            type="button"
            onClick={() => {
              setIsOpenModalLogin(false);
              setIsOpenModalRegister(true);
            }}
          >
            cadastre-se
          </button>
        </form>
      </dialog>
    </StyledBoxDiv>
  );
};
