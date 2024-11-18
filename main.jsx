import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MiComponente  from "./components/MiComponente.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiComponente/>
  </StrictMode>,
)
