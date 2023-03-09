import { StyledBtn } from './styles';

interface iBtnProps {
    children: string;
}

export const BtnRegister = ({ children }: iBtnProps) => (
    <StyledBtn type="button">{children}</StyledBtn>
);
