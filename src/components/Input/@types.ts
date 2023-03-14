import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface iPropsInput {
  disabled?: string;
  value?: string;
  placeholder: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "name"
    | "description"
    | "img"
    | "saleValue"
    | "id";
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
}
