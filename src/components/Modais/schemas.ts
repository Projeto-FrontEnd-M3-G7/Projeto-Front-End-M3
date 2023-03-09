import * as yup from "yup";

export const formSchemaRegister = yup.object().shape({
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

  confirmPassword: yup
    .string()
    .required("É obrigatório confirmar sua senha.")
    .oneOf([yup.ref("password")], "As senhas não correspondem."),

  colaborador: yup.string(),
});

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("É obrigatório digitar um E-mail.")
    .email("E-mail inválido"),

  password: yup.string().required("É obrigatório digitar uma senha."),
});
