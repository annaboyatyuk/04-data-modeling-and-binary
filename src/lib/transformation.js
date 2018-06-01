'use strict';

// const BufferData = require('./bitmap.js');

module.exports = exports = {};



exports.transform = (buffer) => {//?

  let raster = buffer.raster;

  for(let i = 0; i < raster.length; i+=3) {
    raster[i] = 0x00;
    // raster[i + 1] = 0x96;
    // raster[i + 2] = 0x0;
  }
  return(buffer);

};
  
// let pixelArray = buffer.pixelArray;//?
// console.log('hhhhhhhhhh', pixelArray);

// for(let i = 0; i < pixelArray.length; i+=2) {
//   // console.log('......', pixelArray[i]);
//   pixelArray[i] = 0x96;
//   pixelArray[i + 1] = 0x96;
//   pixelArray[i + 2] = 0xce;

// }
// console.log('tttttttttt', pixelArray);
// console.log('BUFFER', buffer);
// console.log('jaslijfeiofjioejf', pixelArray);
// console.log('2387493847938938',Buffer(buffer.colorPalette));
//   return (buffer);

// };




