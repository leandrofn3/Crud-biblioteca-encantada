import React from "react"
import ButtonParagrafoStyled from "./ButtonParagrafoStyled";

interface ButtonParagrafoProps {
    conteudo: string;
}

const ButtonParagrafo: React.FC <ButtonParagrafoProps> = ({conteudo}) => {
    return (
        <React.Fragment>
            <ButtonParagrafoStyled>{conteudo}</ButtonParagrafoStyled>
        </React.Fragment>
    )
}

export default ButtonParagrafo;