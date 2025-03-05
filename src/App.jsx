import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  )
}

function Navigation(){

  return(
    <nav>
      <div>
        <span className="logo">Charlie's Kitchen</span>
        <p>- Cure with food -</p>
      </div>
      <ul className='menu'>
        <li><Link to="/" >HOME</Link></li>
        <li><Link to="/" >CUISINES</Link></li>
        <li><Link to="/" >RECEIPES</Link></li>
        <li><Link to="/" >INGREDIENTS</Link></li>
      </ul>
    </nav>
  )
}

export default App
