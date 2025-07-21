import React from 'react'

import ReactDom from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import createGlobalStyle from './styles/globalstyles.js'

import Router from './routes/routes.jsx'
import Globalstyles from './styles/globalstyles.js'



ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <Globalstyles/>
  </React.StrictMode>
)