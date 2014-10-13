var path = require('path')
var fs = require('fs')

module.exports = function(dir, filter, callback) {
  var filterExt = '.' + filter

  fs.readdir(dir, function(err, list) {
    if (err)
      callback(err)

    list  = list.filter(function(file) {
      return path.extname(file) === filterExt
    })

    callback(null, list)
  })
}
