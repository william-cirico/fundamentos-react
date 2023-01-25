type Props = {
    nome: string;
    preco: number;
    quantidadeEstoque: number;
}

export function ItemCategoria(props: Props) {
    let cor = "#000";

    // Quando a quantidade de produtos for > 0 e <= 5 a cor deve mudar para amarelo
    if (props.quantidadeEstoque === 0) {
        cor = "red";
    } else if (props.quantidadeEstoque <= 5) {
        cor = "rgb(247, 231, 0)";
    }

    return <tr style={{ color: cor }}>
        <td>{props.nome}</td>
        <td>R$ {props.preco.toFixed(2)}</td>
    </tr>
}