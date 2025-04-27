var borderColor = document.querySelector('nav');
var navBackgroundColor = document.querySelector('nav');
var headerBackgroundColor = document.querySelector('header');
var bodyBackgroundColor = document.querySelector('body');
var input = document.querySelector('input');


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

//  var Body = {
//   setBackground : function (color) {
//   document.querySelector('body').style.backgroundColor = color;  
// },
//  setColor : function (color) {
//   document.querySelector('body').style.color = color;
// }
// }


// function night_day(self){

// if ( self.value ==='black') {

//   Body.setBackground('black');
//   Body.setColor('white');
//   self.value = 'white';
//   // borderColor.style = 'border-right: 1px solid black';
//   navBackgroundColor.style = 'background-color : black';
//   headerBackgroundColor.style = 'background-color : black';  

// links.selectColor('powderblue');

// }else{
//   Body.setBackground('white');
//   Body.setColor('black');
//   self.value = 'black';
//   // borderColor.style = 'border-right: 1px solid white';
//   navBackgroundColor.style = 'background-color: rgb(203, 221, 221)';
//   headerBackgroundColor.style = 'background-color : antiquewhite';

// links.selectColor('blue');
// }
// }

var css = document.querySelector("#css-link");
        var darkModeYn = localStorage["dark"];
        loadMode();
        
        function loadMode(){
            if (darkModeYn == "Y"){
                css.setAttribute('href', "dark-mode.css")
                links.selectColor('powderblue');
                navBackgroundColor.style = 'background-color : black';
                headerBackgroundColor.style = 'background-color : black';
                input.value = 'DarkModOff';
                
            } else {
                css.setAttribute('href', "light-mode.css")
                input.value = 'DarkModOn';
            }
        }

        function changeMode(){
            if (darkModeYn == "N"){
                localStorage["dark"] = 'Y' 
                
            } else {
                localStorage["dark"] = 'N'
                
            }

            location.reload(); 
            // 웹페이지 새로고침
        }