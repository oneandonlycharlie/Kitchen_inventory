const pool = require("./dbinit")

const addReciepe = async(entry)=>{
    const SQL = `
    INSERT INTO reciepes (
        title, 
        ingredient_1, 
        ingredient_2, 
        ingredient_3,
        description,
        cuisine_type,
        image
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    `
    await pool.connect();
    await pool.query(SQL, [
        entry.title, 
        entry.ingredient_1, 
        entry.ingredient_2, 
        entry.ingredient_3, 
        entry.description, 
        entry.cuisine_type,
        entry.image
    ]);
    console.log("New data logged, including image!")
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

const updateReciepe = async(entry)=>{
    const SQL = `
        UPDATE reciepes
        SET title='${entry.title}', 
            ingredient_1='${entry.ingredient_1}', 
            ingredient_2='${entry.ingredient_2}', 
            ingredient_3='${entry.ingredient_3}',
            description='${entry.description}'
        WHERE id = ${entry.id}
    `
    await pool.connect();
    await pool.query(SQL);
    console.log("reciepe updated")
}

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
    updateReciepe,
    deleteReciepe
}