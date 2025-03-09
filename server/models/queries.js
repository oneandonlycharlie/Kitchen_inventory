const pool = require("./dbinit")

const addReciepe = async(data)=>{
    const SQL = `
    INSERT INTO reciepes (
        title, 
        ingredient_1, 
        ingredient_2, 
        ingredient_3,
        description,
        cuisine_type
    ) VALUES ($1, $2, $3, $4, $5, $6)
    `
    await pool.connect();
    await pool.query(SQL, [
        data.title, 
        data.ingredient_1, 
        data.ingredient_2, 
        data.ingredient_3, 
        data.description, 
        data.cuisine_type
    ]);
    console.log("New data logged")
}

const getAllReciepes = async()=>{
    const SQL = `
        SELECT * FROM reciepes
    `
    await pool.connect()
    const { rows } = await pool.query(SQL)
    console.log("data fetched")
    return rows
}

// const updateReciepe = async()=>{

// }

const deleteReciepe = async(type,item)=>{
    const category = type=="reciepe"? "id":"cuisine_type"
    const name = item.id || item
    console.log(category)
    console.log(name)
    console.log("processing deletion")
    const SQL = `
        DELETE FROM reciepes
        WHERE ${category} = '${name}';
    `
    await pool.connect()
    const { rows } = await pool.query(SQL)
    console.log(rows)   
    console.log("deletion successful")
}

module.exports = {
    addReciepe,
    getAllReciepes,
    deleteReciepe
}