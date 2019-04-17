
var getFirstSelector = function(selector) {
  return document.querySelector(selector);
};

var nestedTarget = function() {
  return document.getElementById('nested').querySelector('.target');
  
};

var increaseRankBy = function(n) {
 var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
 }
  
};

var deepestChild = function() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
}