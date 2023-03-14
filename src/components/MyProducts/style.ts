import styled from 'styled-components';

export const CardContainer = styled.button`
    background-color: var(--grey-100);

    margin: auto;
    padding: 5px;

    border: transparent;

    width: 100%;
    height: 100%;

    .empty {
        margin: auto;
        padding: 15px;
        width: 100%;
    }

    .cardProducts {
        margin: 0 auto;
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;

        overflow-y: auto;
    }

    @media (min-width: 798px) {
        .cardProducts {
            flex-wrap: wrap;
        }
    }
`;
