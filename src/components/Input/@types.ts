import { UseFormRegisterReturn } from 'react-hook-form';

export interface iPropsInput {
    placeholder: string;
    type: 'text' | 'password' | 'email';
    disabled: string;
    value: string;
    register: UseFormRegisterReturn<string>;
}
