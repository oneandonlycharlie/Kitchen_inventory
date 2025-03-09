import "../styles/category.css"
import { Link, useOutletContext, useParams } from "react-router-dom"
function Category({type}){
    const title = type.toUpperCase() + "S"
    const {keyword} = useParams()
    // get keyword from user choice to filter items
    console.log(`keyword is ${keyword}`)

    const {data} = useOutletContext()
    console.log(data)
    let cuisineList = data.reduce((acc, entry)=>{
        console.log(entry.cuisine_type)
        if (!acc.includes(entry.cuisine_type)){
            acc.push(entry.cuisine_type)
        }
        return acc
    },[])

    let ingredientList = data.reduce((acc, entry)=>{
        console.log(entry.ingredient_1)
        if (!acc.includes(entry.ingredient_1)){
            acc.push(entry.ingredient_1)
        };
        if (!acc.includes(entry.ingredient_2)){
            acc.push(entry.ingredient_2)
        };
        if (!acc.includes(entry.ingredient_3)){
            acc.push(entry.ingredient_3)
        } 
        return acc
    },[])   

    console.log(cuisineList)
    console.log(ingredientList) 

    if (keyword){
        cuisineList = cuisineList.filter((entry)=> entry == keyword);
        ingredientList = ingredientList.filter((entry)=> entry == keyword)
    }

    console.log(cuisineList)
    console.log(ingredientList) 

    return (
        <>
            <h1>ALL {keyword? keyword : ""} {title}</h1>
            <ul className="list">
            {type == "reciepe" && data.map((entry)=> (
                <li key={entry.id}>
                    <Item 
                        type={type}
                        keyword={entry.title}
                        item={entry}
                        src={`http://localhost:3001`+ entry.image}
                    /></li>
            ))}
            {type == "cuisine" && cuisineList.map((entry)=>(
                    <li key={entry}>
                        <Item 
                            type={type}
                            keyword={entry}
                            item={entry}
                    /></li>
            ))}
            {type == "ingredient" && ingredientList.map((entry)=>(
                    <li key={entry}>
                        <Item 
                            type={type}
                            keyword={entry}
                    /></li>
            ))}
            </ul>
        </>
    )
}



export function Item({item,type, keyword="no known", src="/imgs/dish.svg"}){
    const {setCount} = useOutletContext()
    function handleDelete(){
        console.log(type)
        console.log(item)
        fetch("/api",{
            method: "DELETE",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({type,item})
        });
        setCount((prev)=>prev+1)
    }

    return(
        <div className="card">
            <h3><Link to={`/${type}/${keyword}`}>{keyword}</Link></h3>
            <img src={src} alt="" />
            {type !== "ingredient" && 
                <div className="delete">
                    <button onClick={handleDelete}><img src="/imgs/delete.svg" alt="" /></button>
                </div>}
        </div>
    )
}



export default Category