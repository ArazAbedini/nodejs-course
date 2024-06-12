const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

console.log("Attempting to connect to MongoDB...");
MongoClient.connect(connectionURL, {}, (error, client) => {
  if (error) {
    return console.log("ubable to connect to databse!");
  }

  const db = client.db(databaseName);

  db.collection('users').insertOne({
    name: 'Araz',
    age: 21
  })
  
});
