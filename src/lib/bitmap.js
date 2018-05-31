'use strict';


module.exports = buffer;


function buffer(bufferData) {

  const FILE_SIZE_OFFSET = 2;
  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const BYTES_PER_PIXEL_OFFSET = 28;
  const NUM_COLORS_OFFSET = 46;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_LENGTH = 1078;
  const PIXEL_ARRAY_OFFSET = COLOR_TABLE_LENGTH;
  
  return {
    type: bufferData.toString('utf-8', 0, 2),
    fileSize: bufferData.readInt32LE(FILE_SIZE_OFFSET),
    bytesPerPixel: bufferData.readInt16LE(BYTES_PER_PIXEL_OFFSET),
    height: bufferData.readInt32LE(HEIGHT_OFFSET),
    width: bufferData.readInt32LE(WIDTH_OFFSET),
    numColors: bufferData.readInt32LE(NUM_COLORS_OFFSET),
    colorPalette: bufferData.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_LENGTH),
    pixelArray: bufferData.slice(PIXEL_ARRAY_OFFSET),
    length: bufferData.length,
  };

}

