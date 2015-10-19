var fs = require('fs');
var data = require('test.html') ;

Readable = require('stream').Readable;

// read incoming input stream
var ReadStream = function() {
  Readable.call(this, { objectMode : true });
  this.data = data;
  this.curIndex = 0;
};

// transform stream

// write stream
fs.writeFile('./min/', 'test.html', function(err) {
  if (err) {
    throw err;
  } else {
    console.log('success');
  }
});

// pipe them together
//read.pipe(transform).pipe(write);