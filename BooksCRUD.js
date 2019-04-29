var express = require('express');
var bodyParser = require('body-parser');
// var mysql = require('mysql');

var app = express();
app.use(bodyParser.json());

var server = app.listen(8080, () => {
    console.log('Server started');
});

var books = [
    {
        name: 'A.txt',
        author: 'A'
    },
    {
        name: 'B.txt',
        author: 'B'
    },
    {
        name: 'C.txt',
        author: 'C'
    },
    {
        name: 'D.txt',
        author: 'D'
    }
];

app.get('/', (req, res) => {
    res.send('Hello Books!!');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:bookName', (req, res) => {
    var fetchedBook = [];
    const bookName = req.params['bookName'];

    for (let index = 0; index < books.length; index++) {
        if(books[index].name === bookName) {
            fetchedBook.push(books[index]);
        }
    }
    res.status(200).json(fetchedBook);
});

app.post('/addbooks', (req, res) => {
    books.push(req.body);
    res.send(books);
    //res.status(200).json(books);
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

module.exports = server;