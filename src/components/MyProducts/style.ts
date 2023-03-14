import styled from 'styled-components';

export const CardContainer = styled.button`
    background-color: var(--grey-100);

    margin: auto;
    padding: 15px;

    width: 100%;
    display: flex;
    grid-template-columns: auto auto auto;
    gap: 35px;

    overflow-y: auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: auto auto;
    }

    @media (min-width: 1008px) {
        display: grid;
        grid-template-columns: auto auto auto;
    }
`;
