import { CabecalhoCategoria } from "./CabecalhoCategoria";
import { ItemCategoria } from "./ItemCategoria";
import styles from "./TabelaProdutos.module.css";

type Props = {
    filtro: string;
    mostrarApenasEmEstoque: boolean;
}

export function TabelaProdutos(props: Props) {
    // Os produtos seriam fornecidos pelo back-end (API)
    const produtos = [
        { id: 1, nome: "Mouse", preco: 50, quantidadeEstoque: 10, categoria: "Eletrônicos" },
        { id: 2, nome: "Teclado", preco: 70, quantidadeEstoque: 0, categoria: "Eletrônicos" },
        { id: 3, nome: "Headset", preco: 90, quantidadeEstoque: 4, categoria: "Eletrônicos" },
        { id: 4, nome: "Banana", preco: 4, quantidadeEstoque: 20, categoria: "Alimentos" },
        { id: 5, nome: "Maçã", preco: 7, quantidadeEstoque: 2, categoria: "Alimentos" },
        { id: 6, nome: "Pão Frânces", preco: 0.45, quantidadeEstoque: 0, categoria: "Alimentos" },
    ];

    function obtemLinhasTabela(): JSX.Element[] {
        const linhas: JSX.Element[] = [];
        let ultimaCategoria = "";

        // Percorrer os produtos
        produtos.forEach(produto => {
            // Filtrando pelo nome
            if (!produto.nome.toLowerCase().includes(props.filtro.toLowerCase())) {
                return;
            }

            // Filtrando pelos produtos em estoque
            if (props.mostrarApenasEmEstoque && produto.quantidadeEstoque === 0) {
                return;
            }

            // Adicionando os cabeçalhos de categoria
            if (ultimaCategoria !== produto.categoria) {
                linhas.push(<CabecalhoCategoria categoria={produto.categoria} />);
            }

            // Adicionando o produto
            linhas.push(<ItemCategoria {...produto} />);

            ultimaCategoria = produto.categoria;
        });

        return linhas;
    }

    return <table className={styles["tabela-produtos"]}>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
        </thead>
        <tbody>
            { obtemLinhasTabela() }
        </tbody>
    </table>
}