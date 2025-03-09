import { useParams, useOutletContext } from "react-router-dom"
import { useState } from "react"
import "../styles/reciepe.css"

function Reciepe(){
    const {title} = useParams()
    const {data, setCount} = useOutletContext()
    console.log(data)
    console.log(title)
    const reciepe = data.find((entry)=> entry.title == title)
    console.log(reciepe)
    const [isVisible, setTabVisibility] = useState(false)
    return(
        <>
            <div className="reciepe">
                <img className="header" src="/imgs/cabornara.jpeg" alt=""/>
                <h1>{reciepe.title} 
                    <button className="edit"
                            onClick={()=>setTabVisibility(true)}>
                        <img src='/imgs/edit.svg' alt="" srcset="" />
                    </button></h1>
                <div className="description">
                    <ul> Key Ingredients
                        <li>{reciepe.ingredient_1}</li>
                        <li>{reciepe.ingredient_2}</li>
                        <li>{reciepe.ingredient_3}</li>
                    </ul>
                    <p className="text">{reciepe.description}</p>
                </div>
            </div>
            {isVisible 
                && <EditTab 
                    reciepe={reciepe} 
                    closeTab={()=>{
                        setTabVisibility(false);
                        setCount((prev)=>prev+1)
                    }}/>}
        </>
    )
}

function EditTab({reciepe,closeTab}){
    const [newReciepe, setReciepe] = useState(reciepe)

    const handleSubmit = ()=>{
        fetch("/api", {
            method:"PUT",
            body: JSON.stringify(newReciepe),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            if(response.ok) {
                alert("Reciepe updated!")
                closeTab()
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
                <input type="text" value={newReciepe.title} 
                        onChange={(e)=>setReciepe({
                            ...newReciepe,
                            title: e.target.value
                        })}
                />
            </div>
            <div className="description">
                <ul> Key Ingredients
                    <li>
                        <input type="text" value={newReciepe.ingredient_1}
                            onChange={(e)=>setReciepe({
                                ...newReciepe,
                                ingredient_1: e.target.value
                        })}
                        />
                    </li>
                    <li>
                        <input type="text" value={newReciepe.ingredient_2} 
                             onChange={(e)=>setReciepe({
                                ...newReciepe,
                                ingredient_2: e.target.value
                        })}                           
                        />
                    </li>
                    <li>
                        <input type="text" value={newReciepe.ingredient_3} 
                             onChange={(e)=>setReciepe({
                                ...newReciepe,
                                ingredient_3: e.target.value
                        })}                           
                        />
                    </li>                    
                </ul>
                <textarea className="text" value={newReciepe.description}
                             onChange={(e)=>setReciepe({
                                ...newReciepe,
                                description: e.target.value
                            })}                              
                ></textarea>
            </div>
            <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Reciepe