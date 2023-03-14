import { StyledBoxDiv } from '../styles';
import { Input } from '../../Input';
import { Select } from '../../Select/styles';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext/UserContext';

import { iValuesEditForm } from './@types';

interface iValues {
    name: string;
    email: string;
    password: string;
    colaborador: string;
}

export const ModalEditProfile = () => {
    const { openEdit, setOpenEdit, userEdit } = useContext(UserContext);

    const teste = (event) => {
        event.preventDefault();
        const values: iValues = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            colaborador: event.target[3].value,
        };
        userEdit(values);
    };

    return (
        <StyledBoxDiv>
            <dialog>
                <div className="headerModal">
                    <h2>Editar Perfil</h2>
                    <button
                        className="closeModal"
                        onClick={() => setOpenEdit(!openEdit)}
                        type="button"
                    >
                        X
                    </button>
                </div>
                <form
                    className="formModal"
                    onSubmit={(e) => {
                        teste(e);
                    }}
                >
                    <input placeholder="nome" type="text" />

                    <input placeholder="seu e-mail" type="email" />

                    <input placeholder="nova senha" type="password" />

                    <Select>
                        <option value="true">
                            Deseja me tornar um vendedor
                        </option>
                        <option value="false">Deseja ser consumidor</option>
                    </Select>
                    <button type="submit">Editar perfil</button>
                </form>
            </dialog>
        </StyledBoxDiv>
    );
};
