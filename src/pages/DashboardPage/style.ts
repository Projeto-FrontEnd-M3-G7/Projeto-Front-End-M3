import styled from 'styled-components';

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    main {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .user {
        width: 80%;
        padding: 10px;
        background-color: var(--grey-100);
        margin: auto;

        display: flex;
        justify-content: space-between;
        border-radius: 4px;
    }

    .userInfos {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .userDados {
        width: 100%;

        display: flex;
        justify-content: space-around;

        gap: 15px;
    }

    .editUser button {
        background-color: transparent;
        border: transparent;
        width: 40px;
    }

    .editUser img {
        width: 100%;
    }

    .myProducts {
        width: 80%;
        margin: auto;
        overflow: hidden;
        border-radius: 4px;
    }

    .myProducts__title {
        width: 100%;
        background-color: var(--color-primary);
        color: var(--grey-0);
        text-align: center;
        padding: 15px;
        font-size: 2rem;
    }
`;
