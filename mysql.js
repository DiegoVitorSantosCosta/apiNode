const mysql2 = require('mysql2');

var pool = mysql2.createPool({
    // "user":"root",
    // "password": "diegovitor",
    // "database": "banco_api",
    // "host": "172.17.0.2",
    // "port": 3306

    "user":"ba56a182084032",
    "password": "3f0fd637",
    "database": "heroku_a85c027beac9687",
    "host": "us-cdbr-east-04.cleardb.com",
    "port": 3306
    
})

exports.pool = pool