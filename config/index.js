import { createPool } from "mysql";
import { config } from "dotenv";
config()

const connection = createPool({
    host: process.env.DB_Host,
    database: process.env.DB_Name,
    user: process.env.DB_UserName,
    password: process.env.DB_UserPass,
    multipleStatements: true,
    connectionLimit: 30 
})

export {
    connection
}