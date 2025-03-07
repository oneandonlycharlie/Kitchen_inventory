import { useParams } from "react-router-dom";
import "../styles/ingredient.css";
import { Item } from "./categories";

function Ingredient({type="reciepe", keyword=''}){
    const {name} = useParams()
    console.log(name)
    return(
        <div className="ingredient">
            <p>This is all dishes you can make with <span>{name}.</span></p>
            <ul className="list">
                <li><Item type={type} keyword={keyword? keyword:type}/></li>
                <li><Item type={type}/></li>
                <li><Item type={type}/></li>
                <li><Item type={type}/></li>
                <li><Item type={type}/></li>
            </ul>
        </div>
    )
}

export default Ingredient