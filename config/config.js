const path = require('path');
const rootPath = path.normalize(__dirname+'/../');
const {dbURL} = require('./db');


module.exports = {
  db: dbURL,
  rootPath: rootPath
};
