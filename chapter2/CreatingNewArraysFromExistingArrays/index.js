// Hay dos funciones de arrays que nos permite crear arrays
//de un array existente, estas funciones serian concat() y splice();
//La funcion concat() permite conbiar dos arrays o mas en uno;
// La funcion splice() nos permite crear arrays sobre el contenido de arrays existentes


// Ejemplo de concat() function;
(function() {
	console.log("Ejemplo de contact() function");
	var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
	var dmpDept = ["Raymond", "Cynthia","Bryan"];
	var itDiv = cisDept.concat(dmpDept);
	console.log(itDiv);
	var itDiv = dmpDept.concat(cisDept);
	console.log(itDiv);
})();


// Ejemplo de funcion splice();
// splice(3,3) Recibe dos argumentos el primero es la posicion
// y la segunda posicion el numero de elementos que se quiere tomar
// del array original

(function() {
	console.log("Ejemplo de funcion splice()")

	var itDiv = ["Mike", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"];
	var dmpDept = itDiv.splice(3,3);
	var cisDept = itDiv;
	console.log(dmpDept);
	console.log(cisDept);
})();