import React from "react";
import ContainerTitulo from "./TituloStyled";

interface TituloProps {
    texto: string
}
const Titulo: React.FC <TituloProps>= ({texto}) => {
    return (
        <React.Fragment>
            <ContainerTitulo>
                <h1>{texto}</h1>
            </ContainerTitulo>
        </React.Fragment>
    );
}
export default Titulo;