import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MidSide from './components/MidSight'
import RightSide from './components/RightSide'
import Loginpage from './LoginPage/LoginPage'

function App() {
  const [count,setcount] = useState(0)
  const logOut = ()=>{
    setcount(0);
  }
const handler= ()=>{
  console.log("chsalla")
  setcount(1)
}
  return (
    <>
    {
      count? <div className=' flex '>
      <RightSide handler={logOut}/>
      <MidSide/>
    </div>:<Loginpage handler={handler}/>
    }
   
    </>
  )
}

export default App
