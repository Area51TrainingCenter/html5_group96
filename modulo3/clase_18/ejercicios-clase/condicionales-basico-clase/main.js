/*
var numUsuario = parseInt(prompt("Hola, escribe un numero"));
if(isNaN(numUsuario)) {
  var otroNumero = parseInt(prompt("Oye, no escribiste un numero. Intentalo de nuevo"));
  var random = Math.floor(Math.random() * otroNumero) + 1;
  alert("¿Estas listo para ver tu numero?");
  document.write( random + " es el numero que se encuentra entre 0 y " + otroNumero )
} else {
  var random = Math.floor(Math.random() * numUsuario) + 1;
  alert("¿Estas listo para ver tu numero?");
  document.write(random + " es el numero que se encuentra entre 0 y " + numUsuario)
}
*/

// Multiples condiciones

var edad = prompt("Escribe tu edad");

if(parseInt(edad) > 18) {
  document.write("Ingresa a la fiesta")
}else if(parseInt(edad) <= 35) {
  document.write("Puedes pasar a la fiesta pero con las justas");
} else {
  document.write("No puedes pasar a la fiesta")
}

// Signos de comparaciones

var edad = prompt("Escribe tu edad");

if(parseInt(edad) > 18 && parseInt(edad) >= 35) {
  document.write("Ingresa a la fiesta");
}


if(parseInt(edad) > 18 || parseInt(edad) >= 35) {
  document.write("Ingresa a la fiesta");
}

if (parseInt(edad) === 18){}

18 == "18" // true
18 === "18" // false