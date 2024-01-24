import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskContextProvider } from './context/TaskContext.jsx'

//   <React.StrictMode>: Es una heramienta de desarrollo que ayuda a detectar problemas en la aplicacion durante el desarrollo.
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
