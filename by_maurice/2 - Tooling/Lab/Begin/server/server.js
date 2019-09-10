var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var fs = require('fs');
var app = express();

var movies = require('./movies');
app.use('/api/movies', movies);

app.use(serveStatic(path.join(__dirname, '../wwwroot')));

app.use((req, res) => {
    var fileStream = fs.createReadStream(path.join(__dirname, '../wwwroot', 'index.html'));    
    fileStream.pipe(res);
})

app.listen(process.env.PORT || 8080, function () {
    console.info('The server is listening at port ' + (process.env.PORT || 8080));
});
