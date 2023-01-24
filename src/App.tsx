import { useState } from 'react'
import './App.css'
import { ConteudoPage } from './pages/ConteudoPage'
import { ExercicioPage } from './pages/ExercicioPage'

function App() {
  const [showPage, setShowPage] = useState<"conteudo" | "exercicio">("conteudo");

  // JSX - HTML tunado -> Utilizar JS em conjunto com o HTML
  return (
    <div className="App">
      <nav>
        <ul style={{ display: "flex", listStyleType: "none", justifyContent: "center" }}>
          <li 
            onClick={() => setShowPage("conteudo")} 
            style={{ 
              cursor: "pointer", 
              marginRight: 5, 
              textDecoration: showPage === "conteudo" ? "underline" : ""
            }}>Conteúdo</li>
          <li 
            onClick={() => setShowPage("exercicio")} 
            style={{ 
              cursor: "pointer", 
              textDecoration: showPage === "exercicio" ? "underline" : ""
            }}
          >Exercício</li>
        </ul>
      </nav>
      {
        showPage === "conteudo" ? <ConteudoPage /> : <ExercicioPage />
      }
    </div>
  )
}

export default App
