import React, { useState } from "react"
import Livro from "../../types/LivroType";
import { v4 as uuid } from "uuid"
import ContainerInputs from "../inputs";
import Titulo from "../Titulo";
import Tabela from "../Tabela";

// parei no video 1:00:00

const Home: React.FC = () => {
    const [biblioteca, setBiblioteca] = useState<Livro[]>([])
    const [titulo, setTitulo] = useState<string>("")
    const [autor, setAutor] = useState<string>("")
    const [anoDePublicacao, setAnoDePublicacao] = useState<string>("")
    const [genero, setGenero] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [editMode, setEditMode] = useState<string>("")

    function limparInputs() {
        setTitulo("")
        setAutor("")
        setAnoDePublicacao("")
        setGenero("")
        setDescricao("")
        setEditMode("");
    }

    function getDataDeCadrastro() {
        let agora = new Date();
        let dataHora = agora.toLocaleString()
        return dataHora
    }

    function cadrastrar() {
        const agora = new Date();
        const anoAtual = agora.getFullYear();
        const mesAtual = agora.getMonth() + 1; 
        const diaAtual = agora.getDate(); 

        const anoSelecionado = new Date(anoDePublicacao).getFullYear();
        const mesSelecionado = new Date(anoDePublicacao).getMonth() + 1;
        const diaSelecionado = new Date(anoDePublicacao).getDate();

        if (titulo === "" || autor === "" || anoDePublicacao === "" ||genero === "" || descricao === "") {
            return alert("Todos os campos devem ser preenchidos!");
        }

        if (
            anoSelecionado > anoAtual ||
            (anoSelecionado === anoAtual && mesSelecionado > mesAtual) ||
            (anoSelecionado === anoAtual && mesSelecionado === mesAtual && diaSelecionado > diaAtual)
        ) {
            alert("O ano de publicação não pode ser maior que o ano atual.");
        } else {
            const novoLivro = {
                id: uuid(),
                titulo,
                autor,
                anoDePublicacao,
                dataDeCadrastro: getDataDeCadrastro(),
                genero,
                descricao
            };
            setBiblioteca([...biblioteca, novoLivro]);
            limparInputs();
        }
    }

    function deletar(id: string) {
        const confirma = confirm("Tem certeza que deseja Excluir esse livro?")
        if (confirma) {
            const excluir = biblioteca.filter(item => item.id !== id)
            setBiblioteca(excluir)
        }
        return
    };

    function editar(id: string) {
        const editar = biblioteca.find(livro => livro.id === id)
        if (editar) {
            setTitulo(editar.titulo)
            setAutor(editar.autor)
            setAnoDePublicacao(editar.anoDePublicacao)
            setGenero(editar.genero)
            setDescricao(editar.descricao)
            setEditMode(id)
        };
    };

    function botaoclique() {
        if (!editMode) {
            cadrastrar();
        } else {
            const novoLivro = [...biblioteca];

            const livroEditado = novoLivro.find(item => item.id === editMode);

            if (livroEditado) {
                livroEditado.titulo = titulo;
                livroEditado.autor = autor;
                livroEditado.anoDePublicacao = anoDePublicacao;
                livroEditado.genero = genero;
                livroEditado.descricao = descricao;
            }
            setBiblioteca(novoLivro);
            limparInputs()
        }
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
                <button onClick={botaoclique}>{editMode ? "salvar" : "Cadrastrar"}</button>
            </ContainerInputs>
            <Tabela Livro={biblioteca} deletar={deletar} editar={editar} />
        </React.Fragment>
    )
}

export default Home;