
const mongoose = require('mongoose');

const conn = mongoose.connect('mongodb+srv://evapiUser:FMwsbw1Msc9gaqPg@cluster0.t8rny.mongodb.net/evapiDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, });

//for server
//  const conn = mongoose.connect('mongodb://seeway-app:seewayapp@15.207.219.174:27017/Seeway-App', { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false, useCreateIndex:true }); // for local

exports.mongoose = mongoose;

exports.conn = conn;