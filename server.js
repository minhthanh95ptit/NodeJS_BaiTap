// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
var bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var listToDos =  [
      {id: 1, name: 'Đi Chợ'},
      {id: 2, name: 'Nấu Cơm'},
      {id: 3, name: 'Rửa Bát'},
      {id: 4, name: 'Học code tại CodersX'}  
    ];


// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

app.get("/todos", function(req, res) {
  
  var q = req.query.q;
  
  if(q){
     var matchToDo = listToDos.filter(function(todo){
      return todo.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
      res.render('todos/index',{
        listToDos: matchToDo
      });
  }
    
  res.render('todos/index',{
    listToDos: listToDos
  });
});

app.post("/todos/create",function(req, res){
  listToDos.push(req.body);
  // res.render('todos/index',{
  //   listToDos: listToDos
  // });
  res.render('todos/index',{
    listToDos: listToDos
  });
});


// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});