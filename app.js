var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/4/a-brief-history-of-yoga", function(req, res){
    res.render("history");
});

app.listen(3000);
