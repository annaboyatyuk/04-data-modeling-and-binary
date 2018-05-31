'use strict';

const fs = require('fs');


module.exports = exports = {};

exports.readFile = (path, callback) => {

  fs.readFile(path, (err, data) => {
    if(err) {
      callback(err);
    }
    else {
      callback(null, data);
    }
  });
};


exports.writeFile = (fileName, cleanBuffer, callback) => {

  fs.writeFile(fileName, cleanBuffer, (err, data) => {
    if(err) {
      callback(err);
    }
    else{
      callback(null, data);
      console.log('new file created');
    }
  });
};






