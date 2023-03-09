import styled from 'styled-components';

export const MyCardContainer = styled.li`
    border: 1px solid;
    width: auto;
    max-width: 300px;
    padding: 10px;
    background-color: var(--grey-0);
    border: 1.5px solid var(--color-primary);
    min-width: 250px;

    .infoProducts {
        width: 100%;
        border: none;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;
