// props -> Nome das propriedades que passamos para o componente 
// quando ele é criado.

export function ComponenteComProps(props: { nome: string, notas: number[] }) {
    function getMediaImperativo(notas: number[]): number {
        // Imperativo -> Mostra como o resultado será calculado
        let soma = 0;
        for (let nota of notas) {
            soma += nota;
        }

        return soma / notas.length;
    }

    // [10, 9, 8]
    // 0 + 10 = 10
    // 10 + 9 = 19
    // 19 + 8 = 27
    function funcaoDoReduce(prev: number, next: number) {
        return prev + next;
    }

    // como eu converto para arrow function
    // 1) tiro o nome da função
    // 2) deixo os parametros entre parenteses
    // 3) =>
    // 4) escrevo o retorno da função SEM A PALAVRA return

    function getMediaDeclarativo(notas: number[]): number {
        // Declarativo -> Foca no resultado
        // reduce, filter, map
        return notas.reduce((prev:number, next: number) => prev + next) / notas.length;
    }

    function getSituacao(media: number): string {
        // Operador ternário
        // (condicao) ? valor verdadeiro : valor falso
        return media > 6 ? "Aprovado" : "Reprovado";
    }

    function getMediaImpura(): number {
        return props.notas.reduce((prev:number, next: number) => prev + next) / props.notas.length;
    }

    function getCorSituacao(media: number): string {
        return media > 6 ? "green" : "red";
    }

    const media = getMediaDeclarativo(props.notas);
    const situacao = getSituacao(media);
    const cor = getCorSituacao(media);

    return (
        <>
            <h2>Aluno: {props.nome}</h2>
            <p>Notas: {props.notas.join(", ")}</p>
            <p>Média: {media.toFixed(2)}</p>
            {/* Situação: se a média for maior que 6 está aprovado */}
            <p style={{ color: cor }}>Situação: {situacao}</p>
        </>
    );
}