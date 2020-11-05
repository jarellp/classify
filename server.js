// our server!
console.log("is this working?");

const express = require('express');
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 80;
}
app.listen(port, () => {
    console.log("The server is ready")
}); 

// Create database to hold results
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(
    "./login.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Connected to db");
        }
    }
);
// Create tables if it doesn't already exist
db.run(
    'CREATE TABLE IF NOT EXISTS login(email,username,password,results)',
    [],
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Table created");
        }
    }
);