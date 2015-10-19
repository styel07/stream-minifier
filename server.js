var fs = require('fs');
var util = require('util');

function minify() {
  fs.readFile('test.html', function(error, contentsOfFile) {


  });

  // transform stream

  fs.writeFile('./min/', 'test.html', function(err) {
    if (err) {
      throw err;
    } else {
      console.log('success');
    }
  });
}