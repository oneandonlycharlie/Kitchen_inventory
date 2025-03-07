import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      <footer>
          <p>footer</p>
      </footer>
      </main>
    </>
  )
}

function Navigation(){

  return(
    <nav>
      <div>
        <span className="logo">Charlie's Kitchen</span>
        <span className='subtext'> - Cure with food -</span>
      </div>
      <ul className='menu'>
        <li><Link to="/" >HOME</Link></li>
        <li><Link to="/reciepes" >RECEIPES</Link></li>
        <li><Link to="/cuisines" >CUISINES</Link></li>
        <li><Link to="/ingredients" >INGREDIENTS</Link></li>
      </ul>
    </nav>
  )
}

export default App
