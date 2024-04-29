
// node module contains libraries and packages that our project relies on 
// public folder contains any public assets. fonts and videos. they are not bundled during the final output
// we will spend 99 % of the time in the source folder 


// index.css is the main css file for our application 
// we import app.jsx to main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
