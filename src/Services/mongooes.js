
const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://evapiUser:FMwsbw1Msc9gaqPg@cluster0.t8rny.mongodb.net/evapiDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const conn = mongoose.connect('mongodb+srv://evapiUser:FMwsbw1Msc9gaqPg@cluster0.t8rny.mongodb.net/evapiDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, });

//for server
//  const conn = mongoose.connect('mongodb://seeway-app:seewayapp@15.207.219.174:27017/Seeway-App', { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false, useCreateIndex:true }); // for local



exports.mongoose = mongoose;

exports.conn = conn;