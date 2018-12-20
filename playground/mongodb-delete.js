const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("unable to connect to mongo db server", err);
    }
    console.log("connected to mongo db server");
    /* db.collection("Todos")
      .deleteMany({ text: "eat lunch" })
      .then(
        result => {
          console.log(result);
        },
        err => {
          console.log("failed");
        }
      );*/
    /* db.collection("Todos")
      .deleteOne({ text: "eat lunch" })
      .then(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      ); db.collection("Todos")
      .deleteOne({ completed: "false" })
      .then(result => {
        console.log(result);
      });*/
    db.collection("Users").deleteMany({
      _id: new ObjectID("5c0a90f51053f778e8f6b902")
    });
    //db.close();
  }
);
