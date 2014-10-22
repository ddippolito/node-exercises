var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function(request, response) {
  var reqObject = url.parse(request.url, true)
  var queryDate = reqObject.query.iso.toString()
  var time = new Date(queryDate)

  if (reqObject.pathname == '/api/parsetime') {
    result = jsonDate(time)
  } else if  (reqObject.pathname == '/api/unixtime') {
    result = jsonUnixTime(time)
  }

  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result))
  } else {
    response.writeHead(404)
    response.end()
  }
})

function jsonUnixTime(time) {
  return { "unixtime": time.getTime() }
}

function jsonDate(time) {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
}

server.listen(port)
