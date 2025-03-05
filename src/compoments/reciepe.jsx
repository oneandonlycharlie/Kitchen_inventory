import { useParams } from "react-router-dom"
import "../styles/reciepe.css"

function Reciepe(){
    const {title} = useParams()
    console.log(title)
    return(
        <div className="reciepe">
            <img src="/imgs/cabornara.jpeg" alt=""/>
            <h1>{title}</h1>
            <div className="description">
                <ul> Key Ingredients
                    <li>- Opion</li>
                    <li>- Cream</li>
                    <li>- Pepper</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default Reciepe