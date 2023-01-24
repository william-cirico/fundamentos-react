import { Card } from "../components/Card";
import { ComponenteComLista } from "../components/ComponenteComLista";
import { ComponenteControlado } from "../components/ComponenteControlado";
import { Contador } from "../components/Contador";
import { PrimeiroComponenteClasse } from "../components/PrimeiroComponenteClasse";
import { PrimeiroComponenteFuncao } from "../components/PrimeiroComponenteFuncao";
import { SegundoComponente } from "../components/SegundoComponente";

export function ConteudoPage() {
    return (
        <>
            <Card title="Primeiro componente de função">
                <PrimeiroComponenteFuncao />
            </Card>

            <Card children={<PrimeiroComponenteClasse />} title="Primeiro componente de classe" />

            <Card title="Incorporando expressões JSX">
                <SegundoComponente />
            </Card>

            <Card title="Props e Listas">
                <ComponenteComLista />
            </Card>

            <Card title="Trabalhando com formulários">
                <ComponenteControlado />
            </Card>

            <Card title="State">
                <Contador />
            </Card>
        </>
    );
}