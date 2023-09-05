import React, { useState } from "react"
import Livro from "../../types/LivroType";
import { v4 as uuid } from "uuid"
import ContainerInputs from "../inputs";
import Titulo from "../Titulo";
import Tabela from "../Tabela";

// parei no video 1:00:00


const Home: React.FC = () => {
    const [bibliooteca, setBiblioteca] = useState<Livro[]>([])
    const [titulo, setTitulo] = useState<string>("")
    const [autor, setAutor] = useState<string>("")
    const [anoDePublicacao, setAnoDePublicacao] = useState<string>("")
    const [genero, setGenero] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")

    function limparInputs() {
        setTitulo("")
        setAutor("")
        setAnoDePublicacao("")
        setGenero("")
        setDescricao("")
    }

    function getDataDeCadrastro() {
        let agora = new Date();
        let dataHora = agora.toLocaleString()
        return dataHora
    }

    function cadrastrar() {
        const agora = new Date();
        const anoAtual = agora.getFullYear();
        const anoSelecionado = new Date(anoDePublicacao).getFullYear();


        if (anoSelecionado <= anoAtual) {

            if (titulo === "" || autor === "" || anoDePublicacao === "" || genero === "" || genero === "") {
                return alert("Todos os campos devem ser preenchido!")
            }

            const novoLivro = {
                id: uuid(),
                titulo,
                autor,
                anoDePublicacao,
                dataDeCadrastro: getDataDeCadrastro(),
                genero,
                descricao
            };
            setBiblioteca([...bibliooteca, novoLivro]);
            limparInputs();
        } else {
            alert("O ano de publicação não pode ser maior que o ano atual.");
        }
    };

    function deletar(id: string) {
        const excluir = bibliooteca.filter(item => item.id !== id)
        setBiblioteca(excluir)
    }

    return (
        <React.Fragment>
            <Titulo texto="Biblioteca Encantada" />
            <ContainerInputs>
                <label htmlFor="titulo">Título: </label>
                <input name="titulo" placeholder="Título" type="text" onChange={(e) => setTitulo(e.target.value)} value={titulo} />
                <label htmlFor="autor">Autor: </label>
                <input name="autor" placeholder="Autor" type="text" onChange={(e) => setAutor(e.target.value)} value={autor} />
                <label htmlFor="anoDePublicacao">Ano de Publicação: </label>
                <input name="anoDePublicacao" placeholder="Ano de Publicação" type="date" onChange={(e) => setAnoDePublicacao(e.target.value)} value={anoDePublicacao} />
                <label htmlFor="grnero">Gênero: </label>
                <input name="genero" placeholder="Gênero" type="text" onChange={(e) => setGenero(e.target.value)} value={genero} />
                <label htmlFor="descricao">Descrição: </label>
                <input name="descricao" placeholder="Descrição" type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao} />
                <button onClick={cadrastrar}>Cadrastrar</button>
            </ContainerInputs>
            <Tabela Livro={bibliooteca} deletar={deletar} editar={deletar} />
        </React.Fragment>
    )

}

export default Home;