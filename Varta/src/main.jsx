import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {HelmetProvider} from 'react-helmet-async'
import {CssBaseline} from '@mui/material' //it would have been used to reset the css if tailwind was not used 
import {BrowserRouter} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
