'use strict';
const express = require("express");
const fs = require("fs");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/4/a-brief-history-of-yoga", function(req, res){
    let rawHist = fs.readFileSync("history.json");
    let hist = JSON.parse(rawHist);
    res.render("history", {data: hist});
});

app.listen(3000);
