'use strict';

// const BufferData = require('./bitmap.js');

module.exports = exports = {};

// exports.transform = (buffer) => {

//   let colorPalette = buffer.colorPalette;

//   for(let i = 0; i < colorPalette.length; i++) {

//     colorPalette[i] = 0x0;

//   }
//   return(buffer);

// }


exports.transform = (buffer) => {//?

  let pixelArray = buffer.pixelArray;//?

  for(let i = 0; i < pixelArray.length; i++) {
    // console.log('......', pixelArray[i]);
    pixelArray[i] = 0x0;

  }
  // console.log('buff', buffer);
  // console.log('jaslijfeiofjioejf', pixelArray);
  // console.log('2387493847938938',Buffer(buffer.colorPalette));
  return buffer.pixelArray;

};




