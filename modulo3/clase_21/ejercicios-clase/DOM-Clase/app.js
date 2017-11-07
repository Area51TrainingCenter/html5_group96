// DOM: Document Object Model
/* Existen 3 concepto que hacen un sitio o aplicacion web interactiva

	Seleccion del elemento 
	Manipulacion del elemento	
	Escuchar accciones del usuario
*/

var heading = document.getElementById("myHeading");
var description = document.getElementsByClassName("description");
var lista = document.getElementsByTagName("li")

// input[type="text"]

var toggleList = document.querySelector("#toggleList");
document.querySelector("input[type='text']");
document.querySelector("li:first-child");
document.querySelectorAll("li");

//var arrLista = Array.from(lista);

for(var i=0; i < lista.length; i++){
	lista[i].style.color = "red";
}

heading.style.color = "purple";

// Manipulacion de contenido de los elementos seleccionados

var input = document.querySelector(".addItemInput").value;
var p = document.querySelector("p.description");
p.innerHTML = input;
p.textContent = input;

// Manipulacion atributos de los elementos seleccionados

var input2 = document.querySelector(".addItemInput");

console.log(input2.type);
console.log(input2.className);

input2.type = "checkbox";
//input2.className = "raymi";

input2.className += " raymi";
input2.classList.add("nuevaClase");

input2.setAttribute("name", "usuario");

input2.setAttribute("style", "background: red;");

// Estilizando de Elementos

p.style.color = "yellow";
var button1 = document.querySelector(".addItemButton");
button1.style.backgroundColor = "red";
console.log(button1.style);

// Creando nuevos elementos

var div = document.createElement('div');
div.innerHTML = "Este es un nuevo contenido de div";

// Anidando nuevos elementos

var body = document.body;

body.prepend(div);
body.appendChild(div);

p.prepend(div);
p.appendChild(div);


var ul = document.querySelector("ul");
var li = document.createElement("li");
li.innerHTML = "Esta es una nueva lista";
ul.appendChild(li);

// Eliminando Elementos

var liPrimero = document.querySelector("li:first-child");

ul.removeChild(liPrimero);


