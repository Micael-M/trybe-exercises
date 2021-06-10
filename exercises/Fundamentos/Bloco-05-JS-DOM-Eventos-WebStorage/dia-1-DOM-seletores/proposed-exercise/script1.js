// 1 - Question.
let texto = "Serei um profissional na área de TI. Com minha família e independência financeira constituidas. Ser trader como pricipal profissão!";
let tagName = "p";
let position = 0;
let position1 = 1;
let position2 = 2;
let color = "rgb(76,164,109)";
let className = "main-content";
let className1 = "center-content";
let tagNameH1 = "h1";
const colorWhite = "white";
let cssProperty = "backgroundColor";
let textH1 = "Exercício 5.1 - JavaScript"
let textP = "Trybe, a melhor escolha de desenvolvimento WEB"

 function changeTex(text, tag, position) {
  const changeText = document.getElementsByTagName(tag);
  changeText [position].innerText = text;
}

function changeBackgroundColor(color, className, position, fish) {
  const changeColor = document.getElementsByClassName(className);
  changeColor[position].style.backgroundColor = color;
}

function changeColor(colorText, className, position) {
  const changeColor = document.getElementsByClassName(className);
  changeColor[position].style.color = colorText;
}

function upCase(text, tagName, position) {
  let textUpCase = text.toUpperCase();
  const upperCase = document.getElementsByTagName(tagName);
  upperCase[position].innerText = textUpCase;
}

// 1 - Question.
changeTex(texto, tagName, position);

// 2 - Question.
changeBackgroundColor(color, className, position);

// 3 - Question.
changeBackgroundColor(colorWhite, className1, position);

// 4 - Question.
changeTex(textH1, tagNameH1, position);

// 5 - Question.
upCase(texto, tagName, position);
upCase(textP, tagName, position2);

// 6 - Question.
