import { StyledInput } from './styles';
import { iPropsInput } from './@types';

export const Input = ({
    placeholder,
    type,
    register,
    value,
    onChange,
}: iPropsInput) => (
    <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...register}
    />
);
