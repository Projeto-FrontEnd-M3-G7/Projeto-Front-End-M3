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
        background-color: #d5cefc;
        margin: auto;

        display: flex;
        justify-content: space-between;
    }
    .userDados {
        width: 100%;

        display: flex;
        justify-content: space-around;

        gap: 15px;
    }

    .myProducts {
        width: 80%;
        margin: auto;
        overflow: hidden;
        border-radius: 4px;
    }

    .myProducts__title {
        width: 100%;
        background-color: #8637a1;
        color: #ffffff;
        text-align: center;
        padding: 15px;
        font-size: 2rem;
    }
`;
