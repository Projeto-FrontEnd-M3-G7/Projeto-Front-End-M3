import styled from 'styled-components';

export const CardContainer = styled.button`
    background-color: var(--grey-100);

    margin: 0 auto;
    padding: 15px;

    border: transparent;

    width: 100%;
    display: flex;
    grid-template-columns: auto auto auto;
    gap: 35px;

    overflow-y: auto;

    position: relative;

    .empty {
        margin: auto;
        padding: 15px;
        width: 100%;
    }
`;
