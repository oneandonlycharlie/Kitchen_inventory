const { Client } = require("pg")
require("dotenv").config()

const db = new Client({
    user: process.env.USER,
    database: process.env.db,
    password: process.env.PWD
})

const createTable = `
    CREATE TABLE IF NOT EXISTS reciepes (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(255),
        ingredient_1 VARCHAR(255),
        ingredient_2 VARCHAR(255),
        ingredient_3 VARCHAR(255),
        description VARCHAR(255),
        cuisine_type VARCHAR(255)
    )
`

async function dataInit(){
    console.log("Seeding...");
    await db.connect();
    await db.query(createTable);
    console.log("New table created in database")
}

dataInit()