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
    /*db.collection("Todos").insertOne(
      { text: "something to do", completed: "false" },
      (err, result) => {
        if (err) {
          return console.log("unable to insert todo", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );*/
    /* db.collection("Users").insertOne(
      { name: "neil", age: "24", location: "atlanta" },
      (err, result) => {
        if (err) {
          return console.log("err ", err);
        }
        console.log(result.ops[0]._id.getTimestamp());
        //console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );
*/
    db.close();
  }
);
