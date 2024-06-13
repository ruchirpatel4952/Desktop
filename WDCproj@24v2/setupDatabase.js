const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Ensure this is correct
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

const schemaPath = path.join(__dirname, 'schema.sql');
fs.readFile(schemaPath, 'utf8', (err, schema) => {
    if (err) {
        console.error('Error reading schema file:', err);
        connection.end();
        return;
    }

    const commands = schema.split(';').filter(command => command.trim() !== '');

    let executedCommands = 0;
    commands.forEach(command => {
        connection.query(command, (err, results) => {
            if (err) {
                console.error('Error executing SQL script:', err);
                connection.end();
                return;
            }
            executedCommands++;
            if (executedCommands === commands.length) {
                console.log('SQL script executed successfully');
                connection.end();
            }
        });
    });
});
