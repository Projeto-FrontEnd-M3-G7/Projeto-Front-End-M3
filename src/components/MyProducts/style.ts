import styled from 'styled-components';

export const CardContainer = styled.ul`
    background-color: aqua;

    margin: auto;
    padding: 15px;

    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 35px;

    li {
        border: 1px solid;
        width: auto;
        max-width: 300px;
        padding: 10px;
        background-color: #e1dedd;
    }
`;
