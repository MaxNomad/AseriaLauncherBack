const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database,
    connectionLimit : 100

});

pool.getConnection((err) => {
        if (err) {
            return console.error("Database error: " + err.message);  
        }
        else {
            console.log("Database connected, pool created");
        }
});

exports.pool = pool;








