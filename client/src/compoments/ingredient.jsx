import { useParams, useOutletContext } from "react-router-dom";
import "../styles/ingredient.css";
import { Item } from "./category";

function Ingredient({type="reciepe"}){
    const {keyword} = useParams()
    const {data} = useOutletContext()
    // add keyword based search
    const reciepeList = data.filter((entry)=>
        entry.ingredient_1 == keyword 
        || entry.ingredient_2 == keyword 
        || entry.ingredient_3 == keyword
    )
    console.log(keyword)
    console.log(reciepeList)
    return(
        <div className="ingredient">
            <p>This is all dishes you can make with <span>{keyword}.</span></p>
            <ul className="list">
                {reciepeList.map((entry)=>(
                    <li key={entry}><Item 
                        type={type}
                        keyword={entry.title}
                        src={`http://localhost:3001`+ entry.image}
                    /></li>
                ))}
            </ul>
        </div>
    )
}

export default Ingredient