import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { IValuesLoginForm } from "./@types";
import { StyledBoxDiv } from "../styles";
import { Input } from "../../Input";
import { formSchemaLogin } from "../schemas";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const ModalLogin = () => {
  const { setIsOpenModalLogin, setIsOpenModalRegister, userLogin } =
    useContext(UserContext);

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
          onSubmit={handleSubmit((data) => userLogin(data))}
        >
          <p>Preencha os campos para realizar login</p>
          <Input
            type="text"
            placeholder="Digite o seu E-mail"
            register={register("email")}
          />
          <p className="error"> {errors.email?.message} </p>
          <Input
            type="password"
            placeholder="digite a sua senha"
            register={register("password")}
          />
          <p className="error"> {errors.password?.message} </p>
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
