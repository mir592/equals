const mongoose = require('mongoose');
const User = require('../models/users');
const {
  dbURL
} = require('../config/db');
mongoose.connect(dbURL, {
  useMongoClient: true
});


const users = [{
    name: 'Marc',
    pick: '',
    alias: 'Marc2',
    email: 'marc@marc.com',
    password: 1234,
    facebookID: '',
  }, {
    name: 'Miguel',
    pick: '',
    alias: 'Miguel2',
    email: 'miguel@miguel.com',
    password: 1234,
    facebookID: '',
  }, {
    name: 'Victor',
    pick: '',
    alias: 'Victor2',
    email: 'victor@victor.com',
    password: 1234,
    facebookID: '',
  },{
    name: 'Andrei',
     pick:'' ,
    alias: 'Andrei2',
    email: 'andrei@andrei.com',
    password:1234,
    facebookID:'' ,
    }

];

User.create(users, (err, docs) => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});
