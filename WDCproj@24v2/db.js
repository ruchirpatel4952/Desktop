const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: '',
    database: 'ProjDB',  // Specify the database here
});

connection.connect();

module.exports = connection;