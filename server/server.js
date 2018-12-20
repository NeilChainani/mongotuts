var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");
var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

/*var newTodo = new Todo({ text: "Cook dinner" });
newTodo.save().then(
  doc => {
    console.log("Saved Todo", doc);
  },
  e => {
    console.log("unable to save todo");
  }
);*/
var otherTodo = new Todo({
  text: true,
  completed: true,
  completedAt: 1
});
otherTodo.save().then(a => {
  console.log(a);
});

//user email
//email  require/trim//string min 1
//new users collection
/*var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {});
*/
