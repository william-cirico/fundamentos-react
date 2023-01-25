import styles from "./FormularioPesquisa.module.css";

type Props = {
    texto: string;
    mudaTexto: (texto: string) => void;
    mostrarApenasEmEstoque: boolean;
    toggleMostrarEmEstoque: VoidFunction;
};

export function FormularioPesquisa(props: Props) {
    return <form className={styles["formulario-pesquisa"]}>
        <input
            type="text"
            value={props.texto}
            onChange={e => props.mudaTexto(e.target.value)}
            placeholder="digite o nome do produto"
        />
        <label>
            <input
                type="checkbox"
                checked={props.mostrarApenasEmEstoque}
                onChange={props.toggleMostrarEmEstoque}
            />
            Mostrar apenas os produtos em estoque
        </label>
    </form>
}