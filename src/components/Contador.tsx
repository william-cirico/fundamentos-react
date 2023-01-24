import { useState } from "react";

export function Contador() {
    const [contador, setContador] = useState(0);
    const [valor, setValor] = useState(1);

    let cor = "#000";

    if (contador > 0) {
        cor = "green";
    } else if (contador < 0) {
        cor = "red";
    }

    return (
        <>
            <h2 style={{ color: cor }}>Valor do contador: {contador}</h2>
            <button onClick={() => setContador(contador - valor)}>-</button>
            <input type="number" min={0} value={valor} onChange={e => setValor(+e.target.value)} />
            <button onClick={() => setContador(contador + valor)}>+</button>
        </>
    );
}