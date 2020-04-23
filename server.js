// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

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
      res.render('index',{
        listToDos: matchToDo
      });
  }
    
  res.render('index',{
    listToDos: listToDos
  });
});


// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});