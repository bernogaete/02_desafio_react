import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <h2>R E G I S T R O</h2>
    <Register/>
    <hr></hr>

    <h2>L O G I N</h2>
    <Login/>
    <Footer/>
    </>
  )
}

export default App;
