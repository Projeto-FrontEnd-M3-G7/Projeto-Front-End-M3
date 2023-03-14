import { StyledBoxDiv } from '../styles';
import { Input } from '../../Input';
import { Select } from '../../Select/styles';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext/UserContext';

interface iValues {
    name?: string;
    email?: string;
    password?: string;
    colaborador: string;
}

export const ModalEditProfile = () => {
    const { user, openEdit, setOpenEdit, userEdit } = useContext(UserContext);

    const sendEdit = (event) => {
        event.preventDefault();
        const value: iValues = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            colaborador: event.target[3].value,
        };

        userEdit(value);
        if (value.name !== '' && value.email !== '' && value.password !== '')
            if (
                value.name !== '' &&
                value.email !== '' &&
                value.password !== ''
            )
                if (
                    value.name !== '' &&
                    value.email !== '' &&
                    value.password !== ''
                )
                    if (
                        value.name !== '' &&
                        value.email !== '' &&
                        value.password !== ''
                    )
                        console.log(value);
                    else console.log(value.colaborador);
        console.log(value.colaborador);
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
                    onSubmit={(event) => sendEdit(event)}
                >
                    <Input
                        disabled="disabled"
                        value={user.name}
                        placeholder="nome"
                        type="text"
                    />

                    <Input placeholder="seu e-mail" type="email" />

                    <Input placeholder="nova senha" type="password" />

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
