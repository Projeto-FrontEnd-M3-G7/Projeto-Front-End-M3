import { useContext } from 'react';
import { StyledBtn } from './styles';
import { UserContext } from '../../providers/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

interface iBtnProps {
    children: string;
    labelBtn2: string;
}

export const BtnRegister = ({ children, labelBtn2 }: iBtnProps) => {
    const navigate = useNavigate();
    const { setIsOpenModalRegister } = useContext(UserContext);

    const logOut = () => {
        localStorage.clear();
        navigate('/');
    };

    switch (labelBtn2) {
        case 'Cadastrar':
            return (
                <StyledBtn
                    type="button"
                    onClick={() => setIsOpenModalRegister(true)}
                >
                    {children}
                </StyledBtn>
            );
        case 'Sair':
            return (
                <StyledBtn type="button" onClick={() => logOut()}>
                    {children}
                </StyledBtn>
            );
    }
    return <StyledBtn type="button">{children}</StyledBtn>;
};
