const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user : 'root',
    database: 'node-complete',
    password:'241021@Vinay'
});

module.exports = pool.promise();