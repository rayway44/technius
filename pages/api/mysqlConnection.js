const mysql = require('mysql2')

const db = mysql.createPool({
    host: "sg1-ts6.a2hosting.com",
    user: "missio20_technius_admin",
    password: "Mission14@#",
    database: "missio20_technius",
    connectionLimit: 10,
})

module.exports = db;

