import { styled } from "styled-components";

const ContainerTitulo = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 0.6rem;
    padding: 0.5rem;

    > h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #4CAF50;
        text-shadow: 1px 1px #808080;
    }
`;

export default ContainerTitulo;