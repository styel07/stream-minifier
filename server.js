var fs = require('fs');
//var data = require('test.html') ;

Readable = require('stream').Readable;

// read incoming input stream
var ReadStream = function() {
  Readable.call(this, { objectMode : true });
  this.data = data;
  this.curIndex = 0;
};

// This is a prototype method of ReadStream which reads user input
ReadStream.prototype._read = function() {
  // checks if the input is null
  if (this.curIndex === this.data.length) {
    // when null is returned it means its the end of a input stream
    return this.push(null);
  }

  // if the input is not null keep reading by chunk
  var data = this.data[this.curIndex++];

  // stringify the data coming in
  console.log('read' + JSON.stringify(data));
  this.push(data);
};

// transform stream

// write stream
// fs.writeFile('./min/', 'test.html', function(err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log('success');
//   }
// });

// pipe them together
//read.pipe(transform).pipe(write);