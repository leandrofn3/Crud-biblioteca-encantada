import styled from "styled-components";

const ContainerInputs = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50vw;
    margin: 0 auto;

    > input {
        padding: 0.3rem;
        border-radius: 0.3rem;
        background-color: #D3D3D3;
        border: 0.1rem solid #808080;
        margin-bottom: 0.5rem;

        &:hover {
        border: 0.1rem solid #4CAF50;
        }
    }

    > label {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0.1rem;
        color: #4CAF50;
    }

    > button {
        padding: 0.5rem;
        border-radius: 0.3rem;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #3E8E41;
        }
    }
`;





export default ContainerInputs;