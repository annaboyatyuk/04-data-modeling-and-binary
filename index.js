'use strict';

const fileAccess = require('./src/app.js');
const fileTransform = require('./src/lib/transformation.js');
const bitMapper = require('./src/lib/bitmap.js');

const root = __dirname;

console.log('dir name is', __dirname);

var testing ;

fileAccess.readFile(`${root}/assets/bitmap.bmp`, (err, data) => {
  if(err) {
    throw err;
  }
  else {

    testing = bitMapper(data);

    var changeColor = fileTransform.transform(testing);

    fileAccess.writeFile(`${root}/assets/new.bmp`, changeColor.buffer, (err) => {
      if(err){
        throw err;
      }
      else{
        console.log('new file createddddd');
      }
    });
  }
  console.log('first', testing);
});

console.log('second', testing);



