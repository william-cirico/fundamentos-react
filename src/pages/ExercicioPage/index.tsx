import { FormularioPesquisa } from "./FormularioPesquisa";
import { TabelaProdutos } from "./TabelaProdutos";
import styles from "./index.module.css";
import { useState } from "react";

export function ExercicioPage() {
    const [filtro, setFiltro] = useState("");
    const [mostrarApenasEmEstoque, setMostrarApenasEmEstoque] = useState(false);

    return (
        <div className={styles.container}>
            <FormularioPesquisa 
                texto={filtro} 
                mudaTexto={setFiltro}
                mostrarApenasEmEstoque={mostrarApenasEmEstoque}
                toggleMostrarEmEstoque={() => setMostrarApenasEmEstoque(!mostrarApenasEmEstoque)}
            />
            <hr />
            <TabelaProdutos filtro={filtro} mostrarApenasEmEstoque={mostrarApenasEmEstoque} />
        </div>
    );
}