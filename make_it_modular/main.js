var extensionsFilter = require('./extensions')
var files = process.argv[2]
var filter = process.argv[3]

var logIt = function(err, list) {
  if (err)
    console.log('Error', err)

  list.forEach(function(file) {
    console.log(file)
  })
}

extensionsFilter(files, filter, logIt)
