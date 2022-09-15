import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContentView from './components/ContentView'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/content_script" element={<ContentView />}/>
      </Routes>
    </Router>
    
  </React.StrictMode>
) 