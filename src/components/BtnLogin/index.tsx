import { useContext } from 'react';
import { StyledBtn } from './styles';
import { UserContext } from '../../providers/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

interface iBtnProps {
    children: string;
    labelBtn1: string;
}

export const BtnLogin = ({ children, labelBtn1 }: iBtnProps) => {
    const navigate = useNavigate();

    const { setIsOpenModalLogin } = useContext(UserContext);

    switch (labelBtn1) {
      case "Login":
        return (
          <StyledBtn
            type="button"
            onClick={() => {
              setIsOpenModalLogin(true);
            }}
          >
            {children}
          </StyledBtn>
        );
      case "Voltar":
        return (
          <StyledBtn type="button" onClick={() => navigate("/shop")}>
            {children}
          </StyledBtn>
        );
    }

    return <StyledBtn type="button">{children}</StyledBtn>;
};
