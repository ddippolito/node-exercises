var http = require('http')
var bl = require('bl')
var url = process.argv[2]

var req = http.get(url, function(res) {
  res.pipe(bl(function(error, data) {
    if err
      return console.log(err)

    var data = data.toString()
    console.log(data.length)
    console.log(data)
  } ))
})

req.end()
