const pool = require('pg');
require('dotenv').config();
const pool = new Pool(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.HOST,
        database: process.env.DB_DATABASE
    },
    console.log('Connected to employees database.')

)

pool.connect();

module.exports = pool;