// Para remover elementos de una funcion se puede utilizar la funcion mutadora pop();
// Remueve el ultimo elemento de una funcion
// Cada vez que haya que hacer un for loop para sacar un agregar un elemento de un array
// es codigo ineficiente;

(function () {
	console.log("Como Eliminar el ultimo elemento de un array con la funcion pop()");
	var nums = [1,2,3,4,5, 9];
	nums.pop();
	console.log(nums);
})();

(function () {
	console.log("Como eliminar el primer elemento de un array con la funcion shift()");
	var nums = [9,1,2,3,4,5];
	nums.shift();
	console.log(nums);
})();

// Los elementos que son sacados de un array con la funcion pop() y shift();
// estas funciones retornan los varlores que removieron de la funcion


(function () {
	console.log("Los elementos removidos de una funcion con pop() o shift pueden ser guardados en una variable");
	var nums = [6,1,2,3,4,5];
	var six = nums.shift();
	nums.push(six);
	console.log(nums);

})();