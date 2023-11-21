const mysql = require('mysql2');
const config = require('./config');

const pool = mysql.createPool(config);

module.exports = pool;

pool.getConnection((err, connection) => {
    if (err) {

        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log('Connected to database with ID ' + connection.threadId);
    connection.release(); // 연결 반환
    
    });
