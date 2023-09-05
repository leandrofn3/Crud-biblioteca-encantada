import { styled } from "styled-components";

const BotaoExcluir = styled.button`
    background-color: #f44336;
    color: white;
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;

    &:hover {
    background-color: #e53935;
}
`
const BotaoEditar = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;

    &:hover {
    background-color: #43A047;
}
`


export { BotaoExcluir, BotaoEditar }