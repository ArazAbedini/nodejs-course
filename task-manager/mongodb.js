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


  db.collection('tasks').deleteMany({
    description:'task1'
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log("ERROR")
  })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //   completed: true
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
  // db.collection('users').insertOne({
  //   name: 'Araz',
  //   age: 21
  // }, (error, result) => {
  //   if (error)  {
  //     return console.log('unable to insert user!')
  //   }
  //   console.log(result.ops)
  // })
  // db.collection('tasks').insertMany([
  //   {
  //     description:'task1',
  //     completed: true
  //   },
  //   {
  //     description:'task2',
  //     completed: false
  //   },
  //   {
  //     description:'task3',
  //     completed: true
  //   },
  // ], (error, result) => {
  //   if (error){
  //     return console.log('unable to insert collection')
  //   }
  //   console.log(result.ops)
    
  // })


});
