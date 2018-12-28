const _ = require("lodash"); //allows you to filter updates
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();
const port = process.env.PORT || 3000; //used for heroku deployment

app.use(bodyParser.json()); //uses the third party library body parser

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text //Accepts todo text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos }); //gets all the todos
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo }); //prints the valid id
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id) //removes valid id from db
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.patch("/todos/:id", (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ["text", "completed"]); //specifies users can only update this using load dash

  if (!ObjectID.isValid(id)) {
    return res.status(404).send(); //checks if valid
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime(); //fill in completed at if they filed in completed
  } else {
    body.completed = false;
    body.completedAt = null; //sets both the properities completed and completed at
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true }) //sets the body and updates
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo }); //sends the structure
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };
