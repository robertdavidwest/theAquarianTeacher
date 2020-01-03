'use strict';
const express = require("express");
const fs = require("fs");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


function loadChapters(){
  const rawChapters = fs.readFileSync("chapters.json");
  const chapters = JSON.parse(rawChapters);
  
  const rawHist = fs.readFileSync("history.json");
  const hist = JSON.parse(rawHist);
  
  chapters.forEach(function(chapter){
      if (chapter.shortname === 'c4_history') {
          chapter['data'] = hist;
      }
  })
  return chapters;
}
const chapters = loadChapters();


app.get("/", function(req, res){
    res.render("home");
});

app.get("/chapters", function(req, res){
    res.render("chapters", {chapters: chapters});
});

chapters.forEach(function(chapter){
    const route = `/chapters/${chapter.number}/${chapter.routeName}`;
    app.get(route, function(req, res){
        res.render(chapter.shortname, {data: chapter.data});
    });
})

app.listen(3000);
