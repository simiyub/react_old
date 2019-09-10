var express = require('express');
var path = require('path');
var app = express();

var movies = require('./movies');
app.use('/api/movies', movies);

app.listen(process.env.PORT || 3001, function () {
    console.info('The server is listening at port ' + (process.env.PORT || 3001));
});
