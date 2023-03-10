import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledBoxDiv } from "../styles";
import { Input } from "../../Input";
import { Select } from "../../Select/styles";
import { formSchemaRegister } from "../schemas";

interface iModalRegister {
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iValuesRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  colaborador: string;
}

export const ModalRegister = ({
  setIsOpenModalRegister,
  setIsOpenModalLogin,
}: iModalRegister) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iValuesRegisterForm>({
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <StyledBoxDiv>
      <dialog>
        <div className="headerModal">
          <h2>Cadastre-se</h2>
          <button type="button" onClick={() => setIsOpenModalRegister(false)}>
            <span>X</span>
          </button>
        </div>
        <form
          className="formModal"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <p>Preencha os campos para realizar o cadastro</p>
          <Input
            type="text"
            placeholder="Digite o seu nome"
            register={register("name")}
          />
          <p className="error"> {errors.name?.message} </p>
          <Input
            type="text"
            placeholder="Digite o seu E-mail"
            register={register("email")}
          />
          <p className="error"> {errors.email?.message} </p>
          <Input
            type="password"
            placeholder="Crie uma senha de usuário"
            register={register("password")}
          />
          <p className="error"> {errors.password?.message} </p>
          <Input
            type="password"
            placeholder="Confirme sua senha"
            register={register("confirmPassword")}
          />
          <p className="error"> {errors.confirmPassword?.message} </p>
          <Select {...register("colaborador")}>
            <option value="true">Deseja me tornar um vendedor</option>
            <option value="false">Deseja ser consumidor</option>
          </Select>
          <button type="submit">Cadastre-se</button>
          <span>ou</span>
          <button
            className="button"
            type="button"
            onClick={() => {
              setIsOpenModalRegister(false);
              setIsOpenModalLogin(true);
            }}
          >
            Retornar
          </button>
        </form>
      </dialog>
    </StyledBoxDiv>
  );
};
