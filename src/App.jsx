import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './assets/components/button'

function App() {
  const [estado, setEstado] = useState("Verdadero")

  return (

    <>
      <div>
        <h1> {estado} </h1>

        <button 
          onClick={()=>{
            if (estado == "Verdadero") {
              setEstado("Falso");
            } else {
              setEstado("Verdadero");
            }
          }}
        >     
          X
        </button>
        
        <button 
          onClick={()=>{
            alert("Cuidadoo00oo0o0o0")
          }}
        >     
          Y
        </button>
      </div>
    </>
  );
}

export default App
