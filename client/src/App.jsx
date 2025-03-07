import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <CreateButton />
        <Outlet />
      </main>
      <footer>
          <p>footer</p>
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

function CreateButton(){
  const [isVisible, setFormVisibility] = useState(true)

  return(
    <div>
      <button className="create" onClick={()=>setFormVisibility(true)}>
          <img src="/imgs/create.svg" alt="" />
      </button>
      {isVisible && <ReciepeForm closeForm={()=>{setFormVisibility(false)}}/>}
    </div>
  )
}

function ReciepeForm({closeForm}){
    const [isNewCuisine, addNewCuisine] = useState(null)
    return(
        <div className="form">
            <button className='close' onClick={closeForm}>Close</button>
            <form action="">
                <label htmlFor="">Upload photo</label>
                <div>
                  <label htmlFor="title">title</label>
                  <input type="text" id='title' name='title'/>
                </div>
                <div>
                  <label htmlFor="ingredient-1">Key Ingredient 1</label>
                  <input type="text"  id='ingredient1' name='Ingredient_1'/>
                </div>
                <div>
                  <label htmlFor="ingredient-2">Key Ingredient 2</label>
                  <input type="text"  id='ingredient-2' name='Ingredient_2'/>
                </div>
                <div>
                  <label htmlFor="ingredient-3">Key Ingredient 3</label>
                  <input type="text"  id='ingredient-3' name='Ingredient_3'/>
                </div>
                <div>
                  <span>New Cuisine?</span>
                  <button onClick={(e)=>{e.preventDefault();addNewCuisine(true)}}>Yes</button>
                  <button onClick={(e)=>{e.preventDefault();addNewCuisine(false)}}>No</button>
                </div>
                { isNewCuisine == null? <></>:
                  isNewCuisine?
                    <span>Name your cuisine</span>
                  :
                    <div className="cuisine">
                      <span>Pick a category</span>
                      <div>
                        <input type="radio" id="huey" name="cuisine" value="huey" checked />
                        <label for="huey">Huey</label>
                      </div>
                      <div>
                        <input type="radio" id="dewey" name="cuisine" value="dewey" />
                        <label for="dewey">Dewey</label>
                      </div>
                      <div>
                        <input type="radio" id="louie" name="cuisine" value="louie" />
                        <label for="louie">Louie</label>
                      </div>
                    </div>
                }
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default App
