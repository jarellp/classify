// our server!
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

// Implmenting API
/*const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://onlinecounselling-online-counselling-v1.p.rapidapi.com/docs-depression-treatment",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1b3af8a4e5msha894b9964e6aed9p106251jsn889a4ca9b701",
		"x-rapidapi-host": "onlinecounselling-online-counselling-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
*/

// Set up the handlers for Node.js
app.use(express.static("static"));      // static files live in "static" folder
app.set('views', './views')             // set up views and pug
app.set('view engine', 'pug')
app.get('/', function(req, res) {
    res.render('login');
});
app.get('/signup/', function(req, res) {
    res.render('registration');
});
app.get('/login/', function(req, res) {
    res.render('survey');
});
app.get('/submit/', function(req, res) {
    res.render('page');
});
app.get('/page/', function(req, res) {
    res.render('survey');
});
app.get('/survey/', function(req, res) {
    res.render('result');
});
//app.listen(port, ()=> {
  //  console.log("App running at port=" + port)
//});