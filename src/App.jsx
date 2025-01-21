import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
      <Navbar/>
      <img src="/images/kermit.jpg" alt="Logo" width="1080px" height="720px" />
    </>
  )
}

export default App
