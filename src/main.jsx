import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ViewProvider } from './context/ViewContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ViewProvider>
    <App />
    </ViewProvider>
  </React.StrictMode>,
)
