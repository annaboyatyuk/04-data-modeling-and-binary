module.exports = function () {
  return {
    files: [
      'src/**/*.js',
      'src/*.js',
      '!__test__/**/*.spec.js',
      'index.js',
    ],

    tests: [
      '__test__/**/*.spec.js', 
    ],

    testFramework: 'jest',
    env: {
      type: 'node',
    },
  };
};