// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    /* db.collection("Todos")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5c17d920a31cec7dfb8d2567")
        },
        {
          $set: {
            completed: false
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });
*/

    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5c09abc910cc69772caa2e55")
        },
        {
          $set: {
            name: "Neil"
          },
          $inc: {
            age: 1
          }
        },
        { returnOriginal: false }
      )
      .then(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      );
    /* db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('57abbcf4fd13a094e481cf2c')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/

    // db.close();
  }
);
