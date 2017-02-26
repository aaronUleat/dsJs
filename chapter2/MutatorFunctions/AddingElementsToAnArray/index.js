// Adding Elements to an array
// Hay dos funciones para agregar elementos a un array
// la funcion shift() y la funcion push(). La funcion push() agregar el elemento
// al final del array

(function () {
	console.log("Ejemplo de push function");
	var nums = [1,2,3,4,5];
	console.log(nums);
	nums.push(6);
	console.log(nums);
	console.log("Utilizar push() es mas intuitivo que utilizar length property para extender un array");
	console.log("Ejemplo de agregar usando length");
	var nums = [1,2,3,4,5];
	console.log(nums);
	nums[nums.length] = 6;
	console.log(nums);
})();


// Agregar un elemento al inicio del array es mucho mas dificil que agregarlo al inicio de un array
// Para realizarlo sin ayuda de una funcion mutadora, todos los elementos  tiene que ser desplazados
// una posicion antes para agregar un nuevo elemento

(function() {
	console.log("Agregar una funcion al inicio de un array");
	var nums = [2,3,4,5];
	var newnum = 1;
	var N = nums.length;
	for(var i = N; i >= 0; --i) {
		nums[i] = nums[i-1];
	}
	nums[0] = newnum;
	console.log(nums);
})();

// El codigo anterior es ineficiente,
// El mutador para agregar un elemento al princio de un array es unshift

(function() {
	console.log("Agregar un elemento al princio de un array con la funcion mutadora unshift");
	var nums = [2,3,4,5];
	console.log(nums);
	var newnum = 1;
	nums.unshift(newnum);
	console.log(nums);
	nums = [3,4,5];
	nums.unshift(newnum, 1 , 2);
	console.log(nums);
	// este ultimo consolelog demuestra que se pueden agregar multiples elementos
	// all array
})();