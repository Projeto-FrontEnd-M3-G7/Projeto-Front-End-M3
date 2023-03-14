import * as yup from "yup";

export const schema = yup
  .object({
    id: yup.number().required("Informar id do Produto"),
  })
  .required();
