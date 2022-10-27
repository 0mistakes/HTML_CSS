var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    var form = '<!doctype html>'+
        '<html lang="en">'+
    '<head>'+
    '<meta charset="UTF-8">'+
    '<title>Form</title>'+
    '</head>'+
    '<body>'+
    '<h1>Form to send data to server</h1>'+
    '<form action="/submit_result" method="post">'+
    '<textarea name="text" id="" cols="30" rows="10"></textarea><br/>'+
    '<input type="submit" value="Send data to server"/>'+
    '</form>'+
    '</body>'+
    '</html>'
    res.send(form);
})

app.post("/submit_result", function(req, res) {
    var post_text = (req.body.text? "You sent the following text to the server: " + req.body.text : "You sent empty line to the server"); 
    res.send(post_text);
})


app.listen("3000", function(){
    console.log("Server works, port: 3000");
})