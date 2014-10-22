var net = require('net')
var port = process.argv[2]

function now() {
  var date = new Date

  return [today(date), time(date)].join(' ')
}

function today(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].join('-')
}

function time(date) {
  var hours = date.getHours()
  var minutes = date.getMinutes()

  return [hours, minutes].join(':')
}

var server = net.createServer(function(socket){
  socket.end(now()+ '\n')
})

server.listen(port)
