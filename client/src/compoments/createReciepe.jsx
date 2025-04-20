import { useState, useRef } from "react";

function CreateButton({setCount}){
  const [isVisible, setFormVisibility] = useState(false)

  return(
    <div className='pop-up'>
      <button className="create" onClick={()=>setFormVisibility(true)}>
          <img src="/imgs/create.svg" alt="" />
      </button>
      {isVisible 
        && <ReciepeForm closeForm={()=>{
            setFormVisibility(false);
            setCount((prev)=>prev+1)
          }}/>}
    </div>
  )
}

function ReciepeForm({closeForm}){
    const fileInput = useRef(null)
    const [isNewCuisine, addNewCuisine] = useState(null)
    const [reciepe, setReciepe] = useState({
      title:"",
      ingredient_1:"",
      ingredient_2:"",
      ingredient_3:"",
      description:"",
      cuisine_type:"",
    })
    const handleSubmit =(e)=>{
      e.preventDefault() 
      // process image file
      const file = fileInput.current.files[0]
      if (!file){
        alert("Please upload image for your reciepe");
        return
      }
      const data = new FormData()
      data.append("image", file);
      data.append("data", JSON.stringify(reciepe));
      fetch("https://kitchen-inventory-backend-production.up.railway.app/api", {
        method:"POST",
        body: data
      })
      .then((response)=>{
          console.log(response)
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
              <div>
                <input type="file" ref={fileInput} className="file" required/>
              </div>
                <div>
                  <label htmlFor="title">Title</label>
                  <input type="text" id='title' 
                         value={reciepe.title}
                         onChange={(e)=>{setReciepe({
                          ...reciepe,
                          title: e.target.value
                         })}}
                  required/>
                </div>              
                <div>
                  <label htmlFor="ingredient-1">Key Ingredient 1</label>
                  <input type="text"  id='ingredient1'  
                        value={reciepe.ingredient_1}
                        onChange={(e)=>{setReciepe({
                          ...reciepe,
                          ingredient_1: e.target.value
                         })}}                 
                  required/>
                </div>
                <div>
                  <label htmlFor="ingredient-2">Key Ingredient 2</label>
                  <input type="text"  id='ingredient-2' 
                        value={reciepe.ingredient_2}
                        onChange={(e)=>{setReciepe({
                          ...reciepe,
                          ingredient_2: e.target.value
                         })}}                   
                  required/>
                </div>
                <div>
                  <label htmlFor="ingredient-3">Key Ingredient 3</label>
                  <input type="text"  id='ingredient-3' 
                        value={reciepe.ingredient_3}
                        onChange={(e)=>{setReciepe({
                          ...reciepe,
                          ingredient_3: e.target.value
                         })}} 
                  required/>
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea name="" id="decription"
                            value={reciepe.description}
                            onChange={(e)=>{setReciepe({
                              ...reciepe,
                            description: e.target.value
                          })}} 
                  required></textarea>
                </div>
                <div>
                  <span>New Cuisine?</span>
                  <button onClick={(e)=>{e.preventDefault();addNewCuisine(true)}}>Yes</button>
                  <button onClick={(e)=>{e.preventDefault();addNewCuisine(false)}}>No</button>
                </div>
                { isNewCuisine == null? <></>:
                  isNewCuisine?
                    <>
                    <div>
                      <label htmlFor="cuisine">Name your cuisine</label>
                      <input type="text" id='cuisine'
                            value={reciepe.cuisine_type}
                            onChange={(e)=>{setReciepe({
                              ...reciepe,
                              cuisine_type: e.target.value
                            })}}
                      />
                    </div>
                    </>
                  :
                    <div className="cuisine">
                      <label htmlFor="">Pick a category</label>
                      <select id="fruit" name="fruit">
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="cherry">Cherry</option>
                        <option value="orange">Orange</option>
                      </select>
                    </div>
                }
                <button className="submit" type="submit"><img src="/imgs/submit.svg" alt="" /></button>
            </form>
        </div>
    )
}

export default CreateButton