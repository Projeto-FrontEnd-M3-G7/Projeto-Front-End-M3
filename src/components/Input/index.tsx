import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./styles";

interface iPropsInput {
  placeholder: string;
  type: "text" | "password" | "email";
  register: UseFormRegisterReturn<string>;
}

export const Input = ({ placeholder, type, register }: iPropsInput) => (
  <StyledInput type={type} placeholder={placeholder} {...register} />
);
