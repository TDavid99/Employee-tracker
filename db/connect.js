const mysql = require ("mysql2");

//connect to database 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

});

module.exports = db;