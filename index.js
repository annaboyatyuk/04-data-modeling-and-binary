'use strict';

const fileAccess = require('./src/app.js');//?
const fileTransform = require('./src/lib/transformation.js');
const BufferData = require('./src/lib/bitmap.js');

const root = __dirname;

console.log('dir name is', __dirname);

var testing ;

fileAccess.readFile(`${root}/assets/bitmap.bmp`, (err, data) => {
  if(err) {
    throw err;
  }
  else {

    console.log('sjdfjioewjofjwoeia',data);

    // testing = new BufferData(data);

    // var changeColor = fileTransform.transform(testing);

    fileAccess.writeFile(`${root}/assets/new.bmp`, data, (err) => {
      if(err){
        throw err;
      }
      else{
        // console.log('new file createddddd', changeColor);
      }
    });
  }
  console.log('first');
});

console.log('second');



