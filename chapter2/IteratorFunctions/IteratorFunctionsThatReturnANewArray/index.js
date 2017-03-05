/**
 * Created by aaronuleat on 3/2/17.
 */

// Hay dos funciones de iteracion que devuelven un array, que serian
// map y filter, la funcion map() funciona como la funcion forEach(), agregarndo una funcion
// a cada elemento en el array. La diferencia es que map un nuevo array con el resultado
// de la funcion map()

(function () {
	function curve(grade) {
		return grade += 5;
	}
	console.log("Ejemplo de funcion map()");
	var grades = [77,65,81,92,83];
	var newgrades = grades.map(curve);
	console.log(newgrades);

	console.log("Ejemplo utilizando strings");
	function first(word) {
		return word[0];
	}
	var words = ['for', 'your', 'information'];
	var acronym = words.map(first);
	console.log(acronym.join(""));
})();

// La funcion filter() funciona similar a la funcion every(), pero en vez de retornar true si todos
// los elementos de un array satisfacen la funcion booleana, la funciona retorna un nuevo array
// de esos elmentos que satisfacen esa funcion booleana

(function () {
	function isEven(num) {
		return num % 2 == 0;
	}
	function isOdd(num) {
		return num % 2 != 0;
	}
	var nums = [];
	for(var i = 0; i < 20; ++i) {
		nums[i] = i + 1;
	}
	var evens = nums.filter(isEven);
	console.log("Even numbers: ");
	console.log(evens);
	var odds = nums.filter(isOdd);
	console.log("Odd numbers: ");
	console.log(odds);

	// Una funcion interesante de filter();
	function passing(num) {
		return num >= 60;
	}
	var grades = [];
	for(var i = 0; i < 20; ++i) {
		grades[i] = Math.floor(Math.random() * 101);
	}
	var passGrades = grades.filter(passing);
	console.log("All grades: ");
	console.log(grades);
	console.log("Passing grades: ");
	console.log(passGrades);
})();
