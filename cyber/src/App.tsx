import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import InfoCards from './components/InfoCards/InfoCards';
import Quiz from './Pages/Quiz';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/Infos" element={<InfoCards/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
      </Routes>
     
      
     
        
    </div>
  )
}

export default App
