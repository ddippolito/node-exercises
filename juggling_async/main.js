var http = require('http')
var bl = require('bl')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var urls = [url1, url2, url3]

var count = 3
var results = []

function printResults(){
  results.map(function(page){ console.log(page) })
}

function httpGet(url, i) {
  http.get(url, function(response) {
    response.pipe(bl(function(error, data) {

      if (error)
        return console.error(error)

      results[i] = data.toString()
      count--

      if (count == 0)
        printResults()

    }))
  })
}

urls.map(function(url, i) {
  httpGet(url, i)
})
