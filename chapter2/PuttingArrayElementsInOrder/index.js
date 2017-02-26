// Hay dos funciones mutadoras para ordenar los arrays
// el primero es el reverse(), lo que hace es revertir el orden de los elementos de un array

(function () {
	console.log('Ejemplo de la funcion mutadora reverse()');
	var nums = [1,2,3,4,5];
	console.log("Array nums " + nums);
	nums.reverse();
	console.log("Despues de aplicar la funcion reverse()");
	console.log(nums);

	// Aveces necesitamos ordenar los elementos de un array, la funcion mutadora para esto seria
	// sort(), funciona muy bien en strings
	console.log("Ejemplo de sort() en strings");
	var names = ["David", "MIke", "Cynthia", "Clayton", "Bryan", "Raymond"];
	console.log("Nombres sin orden " + names);
	names.sort();
	console.log("Nombres ordenados");
	console.log(names);
	console.log("Nombres orden inverso");
	names.reverse();
	console.log(names);
	// sort() no funciona de la manera esperada en numeros
	console.log("Funcion sort() aplicada en numeros funciona de la siguiente manera");

	var nums = [3,1,2,100,4,200];
	console.log(nums);
	nums.sort();
	console.log("Numeros despues de aplicar sort()");
	console.log(nums);
	// El tipo de orden que aplica la funcion sort es un  Orden lexicográfico
	//  https://es.wikipedia.org/wiki/Orden_lexicogr%C3%A1fico
})();


(function() {
	// funcion para hacer un orden real de numeros con la funcion sort;

	function compare(num1, num2) {
		return num1 - num2;
	}

	var nums = [3,1,2,100,4,200];
	nums.splice(compare());
	console.log(nums);
})();