// El primer group de funciones de iteracion no generan nuevos arrays
// en vez de eso, estas funciones hacen una operacion en cada elemento de un array
// o generan un solo valor en un array

// El primero que veremos es la funcion forEach(), Esta funcion toma a una funcion como argumento
// y aplica la funcion llamada a cada elemento en el array

(function () {
	console.log("Ejemplo de una funcion forEach()");

	function square(num) {
		console.log(num, num * num);
	}

	var nums = [1,2,3,4,5,6,7,8,9,10];
	nums.forEach(square);
})();
// La segunda funcion es every(). aplica una funcion booleana donde va a retonar true
// si la funcion encuentra que todos los elementos del array son true

(function () {
	console.log("Ejemplo de una funcion every()");
	function isEven(num) {
		return num % 2 == 0;
	}

	var nums = [2,4,6,8,10];
	console.log('Array a Iterar')
	console.log(nums)
	var even = nums.every(isEven)
	if(even) {
		console.log("Todos los numeros son pares");
	} else {
		console.log("No todos los numero son pares");
	}

})();

// La funcion some() va a tomar una funcion booleana and va a retornar true si por lo
// menos uno de los elementos dentro del array es true

(function () {
	console.log("Ejemplo de some() function");

	function isEven(num) {
		return num % 2 == 0;
	}
	var nums = [1,2,3,4,5,6,7,8,9,10];
	var someEven = nums.some(isEven);
	if(someEven) {
		console.log("Some numbers are even");
	} else {
		console.log("No numbers are even");
	}

	var nums = [1,3,5,7,9];
	someEven = nums.some(isEven);
	if(someEven) {
		console.log("Some numbers are even");
	} else {
		console.log("no numbers are even");
	}
})();

// La funcion reduce() aplica a una funcion y acumula los elementos sucesivos de un array
// hasta que el final del array sea alcanzado

(function () {
	console.log("Ejemplo de funcion reduce()");
	function add(runningTotal, currentValue) {
		return runningTotal + currentValue;
	}

	var nums =  [10,20,30,40,50,60,70,80,90,100];
	var sum = nums.reduce(add);
	console.log(sum);

	// tambien podemos usar reduce() con strings
	console.log("Ejemplo de reduce usando strings");

	function concat(accumulatedString, item) {
		return accumulatedString + item;
	}

	var words = ["the ", "quick ", "brown ", "fox "];
	var sentence = words.reduce(concat);
	console.log(sentence);

})();