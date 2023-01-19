import { useState } from 'react'
import './App.css'
import { ComponenteComProps } from './components/ComponenteComProps'
import { PrimeiroComponenteClasse } from './components/PrimeiroComponenteClasse'
import { PrimeiroComponenteFuncao } from './components/PrimeiroComponenteFuncao'
import { SegundoComponente } from './components/SegundoComponente'

function App() {
  const [count, setCount] = useState(0)

  // JSX - HTML tunado -> Utilizar JS em conjunto com o HTML
  return (
    <div className="App">
      <PrimeiroComponenteFuncao />
      <PrimeiroComponenteClasse />
      <SegundoComponente />
      <ComponenteComProps nome="William" notas={[10, 9, 8, 7, 6]} />
      <ComponenteComProps nome="Maria" notas={[8, 8, 8]} />
      <ComponenteComProps nome="João" notas={[2, 2, 2]} />
    </div>
  )
}

export default App
