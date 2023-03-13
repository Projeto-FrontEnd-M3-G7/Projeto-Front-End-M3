import { UseFormRegisterReturn } from 'react-hook-form';

export interface iPropsInput {
    placeholder: string;
    type: 'text' | 'password' | 'email';
    register: UseFormRegisterReturn<string>;
}
