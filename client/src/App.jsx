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
  const [isVisible, setFormVisibility] = useState(false)

  return(
    <div className='pop-up'>
      <button className="create" onClick={()=>setFormVisibility(true)}>
          <img src="/imgs/create.svg" alt="" />
      </button>
      {isVisible && <ReciepeForm closeForm={()=>{setFormVisibility(false)}}/>}
    </div>
  )
}

function ReciepeForm({closeForm}){
    const [isNewCuisine, addNewCuisine] = useState(null)
    const [reciepe, setReciepe] = useState({
      title:"title",
      ingredient_1:"1",
      ingredient_2:"2",
      ingredient_3:"3",
      description:"lorem ipsum",
      cuisine_type:"NA",
      image:""
    })
    const handleSubmit =(e)=>{
      e.preventDefault()    
      fetch("/reciepe", {
        method:"POST",
        body: JSON.stringify(reciepe),
        headers:{
          "Content-Type": "application/json"
        }
      })
      .then((response)=>{
          if(response.ok) {
            alert("New reciepe submitted!")
            closeForm()
            // add redirect to reciepe page.
          } else {
            alert ("Oops, something went wrong, try again")
          }
      })

    }


    return(
        <div className="form edittab">
            <button className='close' onClick={closeForm}>
              <img src="/imgs/delete.svg" alt="" />
            </button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Upload photo</label>
                <div>
                  <label htmlFor="title">Title</label>
                  <input type="text" id='title' 
                         value={reciepe.title}
                         onChange={(e)=>{setReciepe({
                          ...reciepe,
                          title: e.target.value
                         })}}
                  />
                </div>
                <div>
                  <label htmlFor="ingredient-1">Key Ingredient 1</label>
                  <input type="text"  id='ingredient1'  
                        value={reciepe.ingredient_1}
                        onChange={(e)=>{setReciepe({
                          ...reciepe,
                          ingredient_1: e.target.value
                         })}}                 
                  />
                </div>
                <div>
                  <label htmlFor="ingredient-2">Key Ingredient 2</label>
                  <input type="text"  id='ingredient-2' 
                        value={reciepe.ingredient_2}
                        onChange={(e)=>{setReciepe({
                          ...reciepe,
                          ingredient_2: e.target.value
                         })}}                   
                  />
                </div>
                <div>
                  <label htmlFor="ingredient-3">Key Ingredient 3</label>
                  <input type="text"  id='ingredient-3' 
                        value={reciepe.ingredient_3}
                        onChange={(e)=>{setReciepe({
                          ...reciepe,
                          ingredient_3: e.target.value
                         })}} 
                  />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea name="" id="decription"
                            value={reciepe.description}
                            onChange={(e)=>{setReciepe({
                              ...reciepe,
                            description: e.target.value
                          })}} 
                  ></textarea>
                </div>
                <div>
                  <span>New Cuisine?</span>
                  <button onClick={(e)=>{e.preventDefault();addNewCuisine(true)}}>Yes</button>
                  <button onClick={(e)=>{e.preventDefault();addNewCuisine(false)}}>No</button>
                </div>
                { isNewCuisine == null? <></>:
                  isNewCuisine?
                    <>
                      <label htmlFor="cuisine">Name your cuisine</label>
                      <input type="text" id='cuisine'
                            value={reciepe.cuisine_type}
                            onChange={(e)=>{setReciepe({
                              ...reciepe,
                              cuisine_type: e.target.value
                            })}}
                      />
                    </>
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
