import { useEffect, useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import CreateButton from './compoments/createReciepe'

function App() {

  const [data, setData] = useState({})
  const [actionCount, setCount] = useState(0)

  const fetchData = ()=>{
    fetch("/api")
    .then((res)=> {
      console.log(res.status);
      return res.json()
    })
    .then((data)=>{
      console.log(data);
      setData(data);
    })};

  useEffect(()=>{
    fetchData();
  },[actionCount])

  console.log(data)

  return (
    <>
      <Navigation />
      <main>
        <CreateButton setCount={setCount}/>
        <Outlet context={{data, setCount}}/>
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
