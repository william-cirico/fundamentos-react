type Props = {
    categoria: string;
};

export function CabecalhoCategoria(props: Props) {
    return <tr>
        <th colSpan={2}>{props.categoria}</th>
    </tr>
}