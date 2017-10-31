// Estructuras Repetitivas (Ciclos, Bucles, Loops)

/*
var random = Math.floor(Math.random * 10) + 1;
document.write(random + "-");

var random = Math.floor(Math.random * 10) + 1;
document.write(random + "-");

var random = Math.floor(Math.random * 10) + 1;
document.write(random + "-");

var random = Math.floor(Math.random * 10) + 1;
document.write(random + "-");

var random = Math.floor(Math.random * 10) + 1;
document.write(random + "-");

var random = Math.floor(Math.random * 10) + 1;
document.write(random + "-");
*/

//var contador = 0;

// While
/*
while(contador < 100000){
	var random = Math.floor(Math.random() * 10) + 1;
	document.write(random + "-");
	contador = contador + 1;
}
*/

// For

/*
for(contador = 0; contador < 1000; contador++){
	var random = Math.floor(Math.random() * 10) + 1;
	document.write(random + "-");
}
*/

// Usando Ciclos para agregar divs;
/*
var crearDivs = "";
for(var contador = 1; contador <= 10; contador++){
	crearDivs += "<div class='numeros'>" + contador + "</div>";
}
document.write(crearDivs);
*/

// Usando ciclos con arreglos

/*

var arreglo1 = ["Raymi", "Adrian", "Fiorella"];

for( var i = 0; i < arreglo1.length;  i++ ){
	document.write(arreglo1[i]);
}

*/

/* El ejercicio anterior sin ciclos 
var respuestasCorrectas = 0;

var qa = [
	["¿Cuantos continentes tiene la Tierra?", 5],
	["¿Como se llama el presidente de USA?", "Donald Trump"],
	["¿Que animal hace cuac cuac?", "Pato"]
];

for (var i = 0; i < qa.length; i++){
	var pregunta = qa[i][0];
	var respuesta = qa[i][1];
	var usuarioRespuesta = prompt(pregunta);

	if(usuarioRespuesta == respuesta){
		var respuestasCorrectas = respuestasCorrectas + 1;
	}
}


if( respuestasCorrectas === 3 ) {
  document.write('<h2>Te ganaste la corona de oro!</h2>');
}else if( respuestasCorrectas === 2 ){
  document.write('<h2>Te ganaste la corona de plata!</h2>');
} else {
  document.write('<h2>Perdiste! :(</h2>')
}
*/
// Usando a los gatitos
/*
var gatitos = document.querySelectorAll("img");

console.log(gatitos)
*/



