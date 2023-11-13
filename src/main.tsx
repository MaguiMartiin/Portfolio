import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import ViewPdf from './views/About/CV/ViewPdf.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/pdf" Component={ViewPdf} />
        <Route path="/" Component={App}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
