'use strict';

const fileAccess = require('./src/app.js');//?
const fileTransform = require('./src/lib/transformation.js');
const BufferData = require('./src/lib/bitmap.js');



let originalFile = process.argv[2] || 'bitmap.bmp';
let newFile = process.argv[3] || 'new.bmp';
// let transformation = process.argv[4] || 'invert';



var testing ;

fileAccess.readFile(`${__dirname}/assets/${originalFile}`, (err, data) => {
  if(err) {
    throw err;
  }
  else {


    testing = new BufferData(data);

    fileTransform.transform(testing);


    fileAccess.writeFile(`${__dirname}/assets/${newFile}`, data, (err) => {
      if(err){
        throw err;
      }
      else{
        console.log('new file createddddd');
      }
    });
  }
});




