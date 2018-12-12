const { MongoClient, ObjectID } = require("mongodb");
var obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("unable to connect to mongo db server", err);
    }
    console.log("connected to mongo db server");

    db.close();
  }
);
