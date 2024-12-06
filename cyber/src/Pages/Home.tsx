import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

import Nabar from '../components/Menu/NavBar';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div >
      
      <Nabar/>

      <div className="outer">
        <div className="dot"></div>
        <div className="cardHome">
        <div className="text">Acces Denied</div>
        <div className="line topl"></div>
        </div>
      </div>
  
    </div>

    </>
  )
}

export default Home