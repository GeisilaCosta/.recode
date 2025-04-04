import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Solução para o erro de CSS (adicione antes do bootstrap)
const styleSheets = document.styleSheets
for (let i = 0; i < styleSheets.length; i++) {
  styleSheets[i].disabled = true
}

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)