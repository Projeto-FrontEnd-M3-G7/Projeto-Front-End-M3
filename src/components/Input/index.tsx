import { StyledInput } from "./styles";
import { iPropsInput } from "./@types";

export const Input = ({ placeholder, type, register }: iPropsInput) => (
  <StyledInput type={type} placeholder={placeholder} {...register} />
);
