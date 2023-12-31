var fs = require("fs");
var logger = require('pino')( {
  mixin(_context, level) {
    return { 'severity': logger.levels.labels[level] }
  }
});

var express = require('express')
var app = express()
var env;

app.get('/', function (req, res) {
  res.send(env)
})

app.listen(3000, function(err){
        // Asynchronously reading the file input.txt from the system with the help of fs module in node js
        fs.readFile('/etc/os-release', function (err, data) {
                if (err) {
                        console.error(err);
                        return err;
                }
		env = data.toString(); 
		logger.info(env);
        });

})

