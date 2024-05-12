// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
//var comments = require('./comments.json');
var comments = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read comments from file
fs.readFile(path.join(__dirname, "comments.json"), function(err, data) {
  if (err) {
    console.error(err);
  } else {
    comments = JSON.parse(data);
  }
});

// Create route to get comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

// Create route to post comments
app.post('/api/comments', function(req, res) {
  var comment = { name: req.body.name, message: req.body.message };
    comments.push(comment);
    fs.writeFile(path.join(__dirname, "comments.json"), JSON.stringify(comments), function(err) {
      if (err) {
        console.error(err);
      } else {
        res.json(comments);
      }
    }); 
}  );