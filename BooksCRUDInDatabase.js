var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'TestNode'
});
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected');
});

var books = [];
// connection.query('SELECT * FROM Books', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The result is: ', results);
//     books = results;
// });

var server = app.listen(8080, () => {
    console.log('Server started');
});

app.get('/', (req, res) => {
    res.send('Hello Books!!');
});

app.get('/books', (req, res) => {
    connection.query('SELECT * FROM Books', function (error, results, fields) {
        if (error){
            res.status(500).json(error);
            throw error;
        }else{
            console.log('The result is: ', results);
            books = results;
            res.status(200).json(books);
        }
    });
});

app.get('/books/:bookName', (req, res) => {
    var fetchedBook = [];
    const bookName = req.params['bookName'];

    connection.query('SELECT * FROM `books` WHERE `Title` = ?', bookName, function (error, results, fields) {
        if (error) throw error;
        console.log('The result is: ', results);
        fetchedBook = results;
    });
    if(fetchedBook.length > 0){
        res.status(200).json(fetchedBook);
    }else{
        res.status(200).send('No records found');
    }
    
});

app.post('/addbooks', (req, res) => {
    var query = connection.query('INSERT INTO Books SET ?', req.body, function (error, results, fields) {
        if (error) throw error;
        // Neat!
    });
    console.log(query.sql);
    res.status(200).send('Book added successfully');
    connection.end();
});

app.delete('/removebooks/:name', (req, res) => {
    
    const bookName = req.params['name'];
    for (let index = 0; index < books.length; index++) {
        if(books[index].name === bookName) {
            books.splice(index, 1);
        }
    }
    res.status(200).json(books);
});

app.get('/*', (req, res) => {
    res.redirect('/books');
});
