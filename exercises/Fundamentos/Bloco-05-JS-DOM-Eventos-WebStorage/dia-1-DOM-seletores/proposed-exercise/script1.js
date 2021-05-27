// 1 - Question.
let texto = "Serei um profissional na área de TI, com minha família e independência financeira constituidas e sendo um trader como pricipal profissão!";
let tagName = "p";
let position = 0;
let color = "rgb(76,164,109)";
let className = "main-content";
let className1 = "center-content"
const colorWhite = "white";
let cssProperty = "backgroundColor";

 function changeTex(text, tag, position) {
  const changeText = document.getElementsByTagName(tag);
  changeText [position].innerText = text;
}

// 2 - Question. rgb(76,164,109)
function changeBackgroundColor(color, className, position, fish) {
  const changeColor = document.getElementsByClassName(className);
  changeColor[position].style.backgroundColor = color;
}

// 3 - Question. 
function changeColor(colorText, className, position) {
  const changeColor = document.getElementsByClassName(className);
  changeColor[position].style.color = colorText ;
}


changeTex(texto, tagName, position);
changeBackgroundColor(color, className, position);
changeBackgroundColor(colorWhite, className1, position)