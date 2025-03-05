import "../styles/categories.css"
import { Link, useParams } from "react-router-dom"
function CategoriesAll({category="Category name"}){
    const title = category.toUpperCase() + "S"
    const {keyword} = useParams() // get keyword from user choice to filter items
    console.log(keyword)
    return (
        <>
            <h1>ALL {title}</h1>
            <ul className="list">
                <li><Item category={category} keyword={"Chinese"}/></li>
                <li><Item category={category}/></li>
                <li><Item category={category}/></li>
                <li><Item category={category}/></li>
                <li><Item category={category}/></li>
            </ul>
        </>
    )
}


function Item({category, keyword, src="/imgs/dish.svg"}){

    return(
        <div className="card">
            <span><Link to={`/receipes/${keyword}`}>{keyword? keyword:category}</Link></span>
            <img src={src} alt="" />
        </div>
    )
}

function NewCuisine(){

}

export default CategoriesAll