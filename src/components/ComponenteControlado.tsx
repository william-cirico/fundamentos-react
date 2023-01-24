import { useState } from "react";

export function ComponenteControlado() {
    // useState -> É um hook (funções do react para nos auxiliar a trabalhar com os componentes)
    // é responsável por disponibilizar um estado para o componente
    // o estado é uma "variável" que quando alterada faz com que o componente renderize novamente.
    // o useState aceita o valor inicial como parâmetro
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [mostrarInformacao, setMostrarInformacao] = useState(false);

    // Quando estamos trabalhando com formulários devemos:
    // 1) Atrelar o value do input a um estado
    // 2) Atrelar o onChange do input a função setState

    function enviaFormulario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Evitar que o formulário recarregue a página
        alert(`Nome: ${nome} | Data de nascimento: ${dataNascimento}`);
    }

    return (
        <form onSubmit={enviaFormulario} style={{ display: "flex", flexDirection: "column" }}>
            <label>
                Nome:
                <input value={nome} onChange={e => setNome(e.target.value)} type="text" placeholder="digite o seu nome" />
            </label>
            <label>
                Data de nascimento:
                <input value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} type="date" />
            </label>
            <button type="submit">Enviar</button>
            <hr />
            <label>
                <input type="checkbox" checked={mostrarInformacao} onChange={e => setMostrarInformacao(!mostrarInformacao)} />
                Mostrar informações
            </label>
            {/* Para esconder/mostrar as informações será necessário 
                realizar uma renderização condicional (renderizar um elemento baseado em um estado)

                Tabela do &&
                V V V
                V F F
                F V F
                F F F
            */}
            {
                mostrarInformacao &&
                <>
                    <p>Nome: {nome}</p>
                    <p>Data de nascimento: {dataNascimento}</p>
                </>
            }

        </form>
    );
}