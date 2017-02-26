// There are two functions that return string representation
// of an array: join() and toString().
// Returna todo el array dividido por comas

(function() {
	var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
	var namestr = names.join();
	console.log(namestr);
	namestr = names.toString();
	console.log(namestr);
})();