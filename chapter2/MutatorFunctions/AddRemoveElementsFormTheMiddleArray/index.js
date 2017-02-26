// Para agregar un elmento en la posicion que queramos podemos utiliar la funcion
// splice(), ahora splice recive los siguientes argumentos:
// * El primer argumento es el starting index (donde quiero empezar a agregar elementos);
// * El segundo argumento es el numero de elementos a remover (si solo se van agregar elementos y no se van remover se debe ingresar 0);
// * El tercer argumento recibie el numero de elementos que se quieren agregar a un array

(function() {
	var nums = [1,2,3,7,8,9];
	console.log('El primer Array');
	console.log(nums);
	var newElements = [4,5,6];
	console.log("El segundo array para agregar");
	console.log(newElements);
	nums.splice(3,0,newElements);
	console.log("Funcion splice que se utilizo para agregar el newElements array: nums.splice(3,0,newElements) ");
	console.log(nums);

	// Los elementos spliced dentro del array pueden ser una lista de items pasados ala funcion,
	// no necesariamente un array de elementos, Por ejemplo;

	console.log("Ejemplo de como pasar elementos en una funcion splice() sin necesidade de ser un array");
	var nums = [1,2,3,7,8,9];
	console.log("primer array " + '['+nums+']');
	nums.splice(3,0, 4,5,6);
	console.log("De esta manera agregamos con splice nums.splice(3,0, 4,5,6);");
	console.log(nums);

	// Este es un ejemplo de como remover elementos de un array con la funcion splice();
	console.log("Ejemplo de como remover elementos de un array con la funcion splice()");

	var nums = [1,2,3,100,200,300,400,5,6];
	console.log(nums);
	nums.splice(3,4);
	console.log("La funcion que utilizamos fue la siguiente nums.splice(3,4);")
	console.log("Esto quiere decir que apartir de la posicion 3 va a remover 4 elementos");
	console.log("La funcion tendria que remover 100, 200, 300 y 400");
	console.log(nums);
})();