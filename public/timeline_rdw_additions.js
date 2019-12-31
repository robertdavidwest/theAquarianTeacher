nextParagraphButtons = document.querySelectorAll(".nextParagraph");
resetParagraphButtons = document.querySelectorAll(".resetParagraphs");


"use strict";
var paragraphToggler = {};
var paragraphNum = 1;

resetParagraphButtons.forEach(function(x){
   x.addEventListener("click", function(){
     var priorParagraphNum = paragraphNum;
     paragraphNum = 1;
     showThisParagraph(paragraphNum, priorParagraphNum);
   });
});

nextParagraphButtons.forEach(function(x){
   x.addEventListener("click", function(){
     var priorParagraphNum = paragraphNum;
     paragraphNum += 1;
     showThisParagraph(paragraphNum, priorParagraphNum);
   });
});

function showThisParagraph(thisParagraphNum, priorParagraphNum) {

   var currentParagraphs = document.querySelectorAll(".p" + priorParagraphNum);
   currentParagraphs.forEach(function(p){
       p.style.display = "none";
   });

   var nextParagraphs = document.querySelectorAll(".p" + thisParagraphNum);
   nextParagraphs.forEach(function(p){
       p.style.display = "block";
   });
};
