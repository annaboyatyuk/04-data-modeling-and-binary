'use strict';

module.exports = exports = {};

// exports.transform = (buffer) => {

//   let colorPalette = buffer.colorPalette;

//   for(let i = 0; i < colorPalette.length; i++) {

//     colorPalette[i] = 0x0;

//   }
//   return(buffer);

// }


exports.transform = (buffer) => {

  let pixelArray = buffer.pixelArray;

  for(let i = 0; i < pixelArray.length; i++) {

    pixelArray[i] = 0x0;

  }
  return(buffer);

};




