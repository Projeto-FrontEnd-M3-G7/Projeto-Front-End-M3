import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./styles";

interface iPropsInput {
  placeholder: string;
  type:
    | "text"
    | "email"
    | "password"
    | "name"
    | "description"
    | "img"
    | "saleValue"
    | "id";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ placeholder, type, register }: iPropsInput) => (
  <StyledInput type={type} placeholder={placeholder} {...register} />
);
