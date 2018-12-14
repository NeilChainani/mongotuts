const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("unable to connect to mongo db server", err);
    }
    console.log("connected to mongo db server");
    db.collection("Users")
      .find({ name: "neil" })
      .toArray()
      .then(
        arr => {
          console.log(arr);
        },
        err => {}
      );
    //db.close();
  }
);
