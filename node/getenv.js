var fs = require("fs");

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send("/test endpoint for getenv")
})

app.listen(3000, function(err){
        // Asynchronously reading the file input.txt from the system with the help of fs module in node js
        fs.readFile('/etc/os-release', function (err, data) {
                if (err) {
                        console.error(err);
                        return err;
                }
                console.log(data.toString());
        });

})

