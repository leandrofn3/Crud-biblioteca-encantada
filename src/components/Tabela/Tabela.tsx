import React from 'react';
import { TableData, TableHeader, TableWrapper } from './TabelaStyled';
import Livro from '../../types/LivroType';
import { BotaoEditar, BotaoExcluir } from './BotoesTabela';

interface LivroTabelaProps {
    Livro: Livro[]
    deletar: (id: string) => void
    editar: (id: string) => void
}

const Tabela: React.FC<LivroTabelaProps> = ({ Livro, deletar, editar }) => {
    return (
        <TableWrapper>
            <table>
                <thead>
                    <tr>
                        <TableHeader>Título</TableHeader>
                        <TableHeader>Autor</TableHeader>
                        <TableHeader>Ano de Publicação</TableHeader>
                        <TableHeader>Ação</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {Livro.map((item, index) => (
                        <tr key={index}>
                            <TableData>{item.titulo}</TableData>
                            <TableData>{item.autor}</TableData>
                            <TableData>{item.anoDePublicacao}</TableData>
                            <TableData><BotaoExcluir onClick={() => deletar(item.id)}>Excluir</BotaoExcluir> <BotaoEditar onClick={() => editar(item.id)}>Editar</BotaoEditar></TableData>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default Tabela;
