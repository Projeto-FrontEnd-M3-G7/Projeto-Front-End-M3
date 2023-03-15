import { StyledBoxDiv } from '../styles';
import { Input } from '../../Input';
import { Select } from '../../Select/styles';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { iUser } from '../../../providers/UserContext/@types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaEdit } from '../schemas';
import { iValuesEditForm } from './@types';

export const ModalEditProfile = () => {
    const { user, openEdit, setOpenEdit, userEdit } = useContext(UserContext);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iValuesEditForm>({ resolver: yupResolver(formSchemaEdit) });

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
                <form className="formModal" onSubmit={handleSubmit(userEdit)}>
                    <input
                        value={name}
                        placeholder="nome"
                        type="text"
                        {...register('name')}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <p className="error"> {errors.name?.message} </p>

                    <input
                        placeholder="seu e-mail"
                        type="email"
                        value={email}
                        {...register('email')}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <p className="error"> {errors.email?.message} </p>

                    <select {...register('colaborador')}>
                        <option value="true">
                            Deseja me tornar um vendedor
                        </option>
                        <option value="false">Deseja ser consumidor</option>
                    </select>
                    <button type="submit">Editar perfil</button>
                </form>
            </dialog>
        </StyledBoxDiv>
    );
};
