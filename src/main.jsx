//Importaciones de React, ReactDOM, App.jsx y bootstrap.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

//Renderizamos la aplicación en el root.
ReactDOM.createRoot(document.getElementById('root')).render(
  //Usamos StrictMode para detectar posibles problemas.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
