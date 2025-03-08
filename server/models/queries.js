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

module.exports = {
    addReciepe,
    getAllReciepes
}