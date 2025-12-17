import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "flowbite/dist/flowbite.js";
import "../src/Modules/Translate/i18n.js";
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
