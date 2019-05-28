var Todo = require('./models/todo');
var express = require('express');
var router = express.Router();
function getTodos(res) 
{
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};//end function getTodos

module.exports = function (app) 
{

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            value: req.body.value,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};


//User
var users = require('./models/user');
function getUser(res) 
{
    users.find(function (err, User) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(User); // return all todos in JSON format
    });
};//end function getTodos

module.exports = function (app) 
{

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/User', function (req, res) {
        // use mongoose to get all todos in the database
        getUser(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/User', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        users.create({
            user_ID: req.body.user_ID,
            user_PWD: req.body.user_PWD,
            name: req.body.name,
            ContactMethod: req.body.ContactMethod,
            Rank: req.body.Rank,
            bonus: req.body.bonus,
            done: false
        }, function (err, user) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getUser(res);
        });

    });

    // delete a todo
    app.delete('/api/User/:user_id', function (req, res) {
        users.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);
            getUser(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); 
        // load the single view file (angular will handle the page changes on the front-end)
    });
};

//Wish
var wishes = require('./models/wish');
function getWish(res) 
{
    wishes.find(function (err, Wish) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(Wish); // return all todos in JSON format
    });
};//end function getTodos

module.exports = function (app) 
{

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/Wish', function (req, res) {
        // use mongoose to get all todos in the database
        getWish(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/Wish', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        wishes.create({
            Wish_ID: req.body.Wish_ID,
            description: req.body.description,
            publish_date: req.body.publish_date,
            DDL: req.body.DDL,
            bonus: req.body.bonus,
            done: false
        }, function (err, wish) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getWish(res);
        });

    });

    // delete a todo
    app.delete('/api/Wish/:wish_id', function (req, res) {
        wishes.remove({
            _id: req.params.wish_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getWish(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
