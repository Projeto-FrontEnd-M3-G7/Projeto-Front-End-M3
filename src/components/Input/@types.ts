import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface iPropsInput {
  placeholder: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}
