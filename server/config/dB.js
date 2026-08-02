import pg from 'pg'
import dotenv from 'dotenev'

dotenv.config()

const {pool} = pg

const pool = new pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB.PORT,

})