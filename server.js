// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
var bodyParser = require('body-parser');
const app = express();
var low = require('lowdb');


var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

var db = low(adapter);

db.defaults({todos: []})
    .write();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

app.get("/todos", function(req, res) {
  
  var q = req.query.q;
  
  if(q){
     var matchToDo = db.get('todos').value().filter(function(todo){
      return todo.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
      res.render('todos/index',{
        todos: matchToDo
      });
  }
    
  res.render('todos/index',{
    todos: db.get('todos').value()
  });
});

app.post("/todos/create",function(req, res){
  
  db.get('todos').push(req.body).write();
  // res.render('todos/index',{
  //   listToDos: listToDos
  // });
  res.render('todos/index',{
    todos: db.get('todos').value()
  });
});


// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});