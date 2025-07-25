import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from "./NavBar.jsx"
import BoxBasic from './WebBody.jsx'
import AnimatedBackground from './AnimatedBackground.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
     <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<BoxBasic />} />
        <Route path="/home" element={<BoxBasic />} />
        
      </Routes>
    </Router>
  )
}

export default App
