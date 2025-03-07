import "../styles/category.css"
import { Link, useParams } from "react-router-dom"
function Category({type}){
    const title = type.toUpperCase() + "S"
    const {keyword} = useParams() // get keyword from user choice to filter items
    console.log(keyword)
    return (
        <>
            <h1>ALL {keyword? `${keyword} reciepes`: title}</h1>
            <ul className="list">
                <li><Item type={type} keyword={keyword? keyword:type}/></li>
                <li><Item type={type}/></li>
                <li><Item type={type}/></li>
                <li><Item type={type}/></li>
                <li><Item type={type}/></li>
            </ul>
        </>
    )
}



export function Item({type, keyword="no known", src="/imgs/dish.svg"}){
    // insert child component depending on type and keyword
    console.log(type)
    return(
        <div className="card">
            <span><Link to={`/${type}/${keyword}`}>{keyword}</Link></span>
            <img src={src} alt="" />
            <div className="delete">
                <button><img src="/imgs/delete.svg" alt="" /></button>
            </div>
        </div>
    )
}



export default Category