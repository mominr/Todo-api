var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	descrition: 'Learn node.js',
	complete: false
}, {
	id: 2,
	descrition: 'Learn swift',
	completed: false
}, {
	id: 3,
	description: 'Review interview QAs',
	completed: true
}];


app.get('/', function(req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function(req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id);
	var matchedTodo;
	todos.forEach(function (todoItem) {
		if (todoItem.id === todoId) {
			matchedTodo = todoItem;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	}
	else {
		res.status(404).send();
	}
}); 

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
