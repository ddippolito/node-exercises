var fs = require('fs');
var path = require('path');

var files = process.argv[2];
var extension = '.' + process.argv[3];

var filter_ext = function(err, list) {
  list.forEach(function(file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
};

var files = fs.readdir(files, filter_ext);
