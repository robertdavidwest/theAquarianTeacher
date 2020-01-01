"use strict";

// init paragraph toggler
var paragraphToggler = {};
paragraphToggler.currentNumber = 1;
paragraphToggler.priorNumber = undefined;
paragraphToggler.showCurrentHidePrior = function() {
   var currentParagraphs = document.querySelectorAll(".para" + this.priorNumber);
   currentParagraphs.forEach(function(p){
       p.style.display = "none";
   });

   var nextParagraphs = document.querySelectorAll(".para" + this.currentNumber);
   nextParagraphs.forEach(function(p){
       p.style.display = "block";
   });
}

document.querySelectorAll(".nextParagraph").forEach(function(x){
   x.addEventListener("click", function(){
     paragraphToggler.priorNumber = paragraphToggler.currentNumber;
     paragraphToggler.currentNumber += 1;
     paragraphToggler.showCurrentHidePrior();
   });
});


document.querySelectorAll(".resetParagraphs").forEach(function(x){
   x.addEventListener("click", function(){
     paragraphToggler.priorNumber = paragraphToggler.currentNumber;
     paragraphToggler.currentNumber = 1;
     paragraphToggler.showCurrentHidePrior();
   });
});
