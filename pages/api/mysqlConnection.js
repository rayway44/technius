const mysql = require('mysql2')

const db = mysql.createPool({
    host: "34.67.73.170",
    user: "root",
    password: "",
    database: "technius",
    connectionLimit: 10,
})

module.exports = db;

