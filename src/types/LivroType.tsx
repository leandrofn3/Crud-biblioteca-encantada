interface Livro {
    id: string ,
    titulo: string,
    autor: string,
    anoDePublicacao: string | number,
    dataDeCadrastro: string | number,
    genero: string,
    descricao: string
};

export default Livro;