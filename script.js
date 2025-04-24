var borderColor = document.querySelector('nav');
var links = {
    selectColor : function (color) {
let links = document.querySelectorAll('a');
let i = 0;
 while(i < links.length){
   links[i].style.color = color;
   i = i + 1;
 }  
}
}

 var Body = {
  setbackground : function (color) {
  document.querySelector('body').style.backgroundColor = color;  
},
 setcolor : function (color) {
  document.querySelector('body').style.color = color;
}
}


function night_day(self){

if ( self.value ==='black') {

  Body.setbackground('black');
  Body.setcolor('white');
  self.value = 'white';
  borderColor.style = 'border-right: 1px solid black';  

links.selectColor('powderblue');

}else{
  Body.setbackground('white');
  Body.setcolor('black');
  self.value = 'black';
  borderColor.style = 'border-right: 1px solid white';


links.selectColor('blue');
}
}
function sum(params,params2) {
document.write(params+params2*10);
}