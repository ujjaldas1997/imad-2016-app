var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/article-one.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/ujjal.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ujjal.JPG'));
});

app.get('/ui/back1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'back1.jpg'));
});

app.get('/ui/tree.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tree.jpg'));
});

app.get('/ui/icon.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'icon.jpg'));
});

app.get('/ui/background.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'background.jpg'));
});

var names = [];
app.get('/submit', function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
