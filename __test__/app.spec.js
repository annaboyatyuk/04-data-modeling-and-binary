'use strict';

let bitReader = require('../src/app.js');
let bitMapper = require('../src/lib/bitmap');
// let transformer = require('../src/lib/transformation');
// let index = require('../index');


describe('Bitmap reader', () => {

  it(' should show an error if file does not exist', (done) => {
    let filePath = 'assets/missing.txt';
    bitReader.readFile(filePath, (err) => {
      expect(err).not.toBeNull();
      // console.log(buffer, 'buffer');
      done();
    });
  });


  it(' should call on buffer when given a valid file path', (done) => {
    let filePath = 'assets/bitmap.bmp';
    bitReader.readFile(filePath, (err, buffer) => {
      expect(err).toBeNull();
      expect(typeof buffer).toBe('object');
      // console.log(buffer);
      done();
    });
  });


  it(' should call the first two chars of the buffer and they should be BM', (done) => {
    let filePath = 'assets/bitmap.bmp';
    bitReader.readFile(filePath, (err, buffer) => {
      let actual = buffer.toString('utf-8', 0, 2);
      let expected = 'BM';
      expect(actual).toEqual(expected);
      done();
    });
  });


  it(' should show an object with the correct dimensions', (done) => {
    let filePath = 'assets/bitmap.bmp';
    bitReader.readFile(filePath, (err, buffer) => {
      let results = bitMapper(buffer);
      console.log('table', results.colorPalette.length);
      // console.log(results.colorPalette);
      expect(results.width).toBe(100);
      expect(results.height).toBe(100);
      done();
    });
  });



});



