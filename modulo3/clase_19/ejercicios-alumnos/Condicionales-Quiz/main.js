/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 3 preguntas que el usuario debe de responder. Si el usuario responde las 3 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 2 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 2 preguntas se le mostrará un mensaje donde perdió.

*/

var pregunta1 = prompt("¿Quien es el presidente de USA?");
var pregunta2 = prompt("¿Cuantas patas tiene una araña?");
var pregunta3 = prompt("¿Quien fue el primer hombre en el espacio?");

var respuestasCorrectas = 0;

if(pregunta1 === "Donald Trump") {
  respuestasCorrectas++;
} 

if (parseInt(pregunta2) === 8 ) {
  respuestasCorrectas++;
}

if(pregunta3 === "Yuri Gagarin") {
  respuestasCorrectas++;
} 

if(respuestasCorrectas === 3) {
  document.write("Te has ganado la corona de oro");
}else if(respuestasCorrectas === 2) {
  document.write("Te has ganado la corona de plata");
} else if(respuestasCorrectas < 2) {
  document.write("Perdiste!");
}