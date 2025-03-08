import { useParams } from "react-router-dom"
import { useState } from "react"
import "../styles/reciepe.css"

function Reciepe(){
    const {title} = useParams()
    console.log(title)
    const [isVisible, setTabVisibility] = useState(false)
    return(
        <>
            <div className="reciepe">
                <img className="header" src="/imgs/cabornara.jpeg" alt=""/>
                <h1>{title} 
                    <button className="edit"
                            onClick={()=>setTabVisibility(true)}>
                        <img src='/imgs/edit.svg' alt="" srcset="" />
                    </button></h1>
                <div className="description">
                    <ul> Key Ingredients
                        <li>Opion</li>
                        <li>Cream</li>
                        <li>Pepper</li>
                    </ul>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            {isVisible && <EditTab closeTab={()=>{setTabVisibility(false)}}/>}
        </>
    )
}

function EditTab({closeTab}){
    const [reciepe, setReciepe] = useState({
      title:"title",
      ingredient_1:"1",
      ingredient_2:"2",
      ingredient_3:"3",
      description:"lorem ipsum",
    })

    const handleSubmit = ()=>{
        fetch("/reciepe", {
            method:"PUT",
            body: JSON.stringify(reciepe),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            if(response.ok) {
                alert("Reciepe updated!")
                closeTab()
                // refresh redirect to reciepe page.
            } else {
                alert ("Oops, something went wrong, try again")
            }
        })        
    }

    return(
        <div className="edittab">
            <div className="title">
                <button className="close"
                        onClick={closeTab}>
                    <img src="/imgs/delete.svg" alt="" srcset="" />
                </button>                
                <label className="title" htmlFor="">Title</label>
                <input type="text" value={reciepe.title} 
                        onChange={(e)=>setReciepe({
                            ...reciepe,
                            title: e.target.value
                        })}
                />
            </div>
            <div className="description">
                <ul> Key Ingredients
                    <li>
                        <input type="text" value={reciepe.ingredient_1}
                            onChange={(e)=>setReciepe({
                                ...reciepe,
                                ingredient_1: e.target.value
                        })}
                        />
                    </li>
                    <li>
                        <input type="text" value={reciepe.ingredient_2} 
                             onChange={(e)=>setReciepe({
                                ...reciepe,
                                ingredient_2: e.target.value
                        })}                           
                        />
                    </li>
                    <li>
                        <input type="text" value={reciepe.ingredient_3} 
                             onChange={(e)=>setReciepe({
                                ...reciepe,
                                ingredient_3: e.target.value
                        })}                           
                        />
                    </li>                    
                </ul>
                <textarea className="text" value={reciepe.description}
                             onChange={(e)=>setReciepe({
                                ...reciepe,
                                description: e.target.value
                            })}                              
                ></textarea>
            </div>
            <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Reciepe