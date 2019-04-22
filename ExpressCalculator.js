var express = require('express');
var app = express();
var server = app.listen(8080, () => {
    console.log('Server started');
});

app.get('/', (req, res) => {
    res.send('Hello !! How you doing?');
});

function checkInput(number1,number2){
    var resposneObject = {};
    if(isNaN(number1) || isNaN(number2)) {
        resposneObject.success = false;
        resposneObject.data = {};
        resposneObject.code = 403;
        resposneObject.message = 'One of the parameter is not a number';
    }
    return resposneObject;
}

app.get('/add/:num1/:num2', (req, resp) => {
    var resposneObject = {};
    const number1 = req.params['num1'];
    const number2 = req.params['num2'];
    resposneObject = checkInput(number1,number2);

    if(!Object.keys(resposneObject).length){
        var addition = parseInt(number1) + parseInt(number2);
    
        resposneObject.success = true;
        resposneObject.data = addition;
        resposneObject.code = 200;
        resposneObject.message = 'OK';
        resp.status(200).send(resposneObject);
    }else{
        resp.status(403).send(resposneObject);
    }
});

app.get('/substract/:num1/:num2', (req, resp) => {
    var resposneObject = {};
    const number1 = req.params['num1'];
    const number2 = req.params['num2'];
    resposneObject = checkInput(number1,number2);

    if(!Object.keys(resposneObject).length){
        var addition = parseInt(number1) - parseInt(number2);
    
        resposneObject.success = true;
        resposneObject.data = addition;
        resposneObject.code = 200;
        resposneObject.message = 'OK';
        resp.status(200).send(resposneObject);
    }else{
        resp.status(403).send(resposneObject);
    }
});

app.get('/absoluteSubstract/:num1/:num2', (req, resp) => {
    var resposneObject = {};
    const number1 = req.params['num1'];
    const number2 = req.params['num2'];
    resposneObject = checkInput(number1,number2);

    if(!Object.keys(resposneObject).length){
        var addition = Math.abs(parseInt(number1) - parseInt(number2));
    
        resposneObject.success = true;
        resposneObject.data = addition;
        resposneObject.code = 200;
        resposneObject.message = 'OK';
        resp.status(200).send(resposneObject);
    }else{
        resp.status(403).send(resposneObject);
    }
});

app.get('/multiply/:num1/:num2', (req, resp) => {
    var resposneObject = {};
    const number1 = req.params['num1'];
    const number2 = req.params['num2'];
    resposneObject = checkInput(number1,number2);

    if(!Object.keys(resposneObject).length){
        var addition = parseInt(number1) * parseInt(number2);
    
        resposneObject.success = true;
        resposneObject.data = addition;
        resposneObject.code = 200;
        resposneObject.message = 'OK';
        resp.status(200).send(resposneObject);
    }else{
        resp.status(403).send(resposneObject);
    }
});

app.get('/divide/:num1/:num2', (req, resp) => {
    var resposneObject = {};
    const number1 = req.params['num1'];
    const number2 = req.params['num2'];
    resposneObject = checkInput(number1,number2);

    if(!Object.keys(resposneObject).length && number2 == '0'){
        resposneObject.success = false;
        resposneObject.data = {};
        resposneObject.code = 403;
        resposneObject.message = 'Divide by zero error';
        resp.status(403).send(resposneObject);
    }else if(!Object.keys(resposneObject).length){
        var addition = parseInt(number1) / parseInt(number2);
    
        resposneObject.success = true;
        resposneObject.data = addition;
        resposneObject.code = 200;
        resposneObject.message = 'OK';
        resp.status(200).send(resposneObject);
    }else{
        resp.status(403).send(resposneObject);
    }
});


