'use strict';


module.exports = buffer;


function buffer(data) {

  const FILE_SIZE_OFFSET = 2;
  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const BYTES_PER_PIXEL_OFFSET = 28;
  const NUM_COLORS_OFFSET = 46;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_LENGTH = 1078;
  
  return {
    type: data.toString('utf-8', 0, 2),
    fileSize: data.readInt32LE(FILE_SIZE_OFFSET),
    bytesPerPixel: data.readInt16LE(BYTES_PER_PIXEL_OFFSET),
    height: data.readInt32LE(HEIGHT_OFFSET),
    width: data.readInt32LE(WIDTH_OFFSET),
    numColors: data.readInt32LE(NUM_COLORS_OFFSET),
    colorPalette: data.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_LENGTH),
  };

}

