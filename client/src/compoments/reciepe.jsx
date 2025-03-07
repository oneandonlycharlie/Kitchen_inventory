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

    return(
        <div className="edittab">
            <div className="title">
                <label className="title" htmlFor="">Title</label>
                <input type="text" />
                <button className="close"
                        onClick={closeTab}>
                    <img src="/imgs/delete.svg" alt="" srcset="" />
                </button>
            </div>
            <div className="description">
                <ul> Key Ingredients
                    <li>
                        <input type="text" />
                    </li>
                    <li>
                        <input type="text" />
                    </li>
                    <li>
                        <input type="text" />
                    </li>                    
                </ul>
                <textarea className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</textarea>
            </div>
            <button className="submit">Submit</button>
        </div>
    )
}

export default Reciepe