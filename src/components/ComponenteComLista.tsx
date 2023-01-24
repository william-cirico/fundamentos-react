import { ComponenteComProps } from "./ComponenteComProps";

export function ComponenteComLista() {
    const alunos = [
        { id: 1, nome: "William", notas: [10, 9, 8, 7, 6] },
        { id: 2, nome: "Maria", notas: [10, 10, 8] },
        { id: 3, nome: "João", notas: [10, 7, 6] },
        { id: 4, nome: "Pedro", notas: [10, 2, 6] },
    ];

    // 1) Para renderizar listas você deve utilizar a função map
    // 2) Cada elemento de uma lista deve possuir uma key identificadora

    // map
    // Preciso duplicar os elementos de um vetor
    // [1, 2, 3] -> [2, 4, 6]
    // [2]
    // [2, 4]
    // [2, 4, 6]
    // <ComponenteComProp nome={aluno.nome} notas={aluno.notas} />
    // const vetorOriginal = [1, 2, 3]; 
    // const vetorDuplicado = vetorOriginal.map((valor) => valor * 2);

    return (
        <>
            {
                alunos.map(aluno => <ComponenteComProps key={aluno.id} nome={aluno.nome} notas={aluno.notas} />)
            }
        </>
    );
}