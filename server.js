var express = require('express');
var app     = express();
var path    = require('path');

//set up public folder to server assets
app.use(express.static(__dirname + '/public'));

//set up one route to the index.html
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname +'/public/views/index.html'));
});

//starts port on 808-0
app.listen(8080);
console.log('Magic happens on port 8080');
