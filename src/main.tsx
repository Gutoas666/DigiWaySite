import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { FirebaseConexao } from './firebase/FirebaseConexao'

const root = document.getElementById('root')

if (root) {

  createRoot(root).render(
    <StrictMode>
     { <FirebaseConexao /> }  
      <App />
    </StrictMode>,
  )

} else {
  console.error("Elemento 'root' não encontrado no DOM.");
}