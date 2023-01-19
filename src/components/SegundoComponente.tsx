import "./SegundoComponente.css";
import styles from "./SegundoComponente.module.css";

// Regra de componentes
// Um componente só pode retornar um elemento JSX
export function SegundoComponente() {
    const nome = "William";
    const idade = 23;

    // Incorporar expressões JS no JSX
    return (
        <div className={styles["bg-red"]}> {/* Fragmento do React <></> */}
            <h2>Oi, meu nome é <span style={{ 
                color: "red", 
                textShadow: "2px 1px black" 
            }}>{nome}</span> 🖐</h2> {/* Estilo em linha */}
            <p className="age">e eu tenho {idade} anos.</p> {/* Trabalhando com arquivos .css */}
        </div>
    )
}

// CSS Modular:
// 1) Nome do arquivo CSS tem quer ser -> NomeComponente.module.css
// 2) O import é diferente -> import styles from "caminhodoaquivo"
// 3) Adicionar as classes em formato de objeto