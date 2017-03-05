
(function() {
	var sentence = "The quick brown fox jumped over the lazy dog";
	var words = sentence.split(" ");
	// al pasar sentece por la funcion split va hacer un array como
	// ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
	for(var i = 0; i < words.length; ++i) {
		console.log("word " + i + ": " + words[i]);
		// i = 0;
		// word 0 : The

		// i = 1
		// word 1: quick

		// i = 2
		// word 2 : brown

		// i = 3
		// word 3: fox
		//...
	}
})();

(function() {
	console.log("Second Function");

	var names = [
		"David",
		"Mike",
		"Cinthia",
		"Raymond",
		"Clayton",
		"Mike",
		"Jennifer"
	];

	var name = "Mike";
	var firstPos = names.indexOf(name);
	// La primera vez que la ocurrencia pasa
	console.log("First found " + name + " at position " + firstPos);
	 var lastPos = names.lastIndexOf(name);
	 // la ultima vez que la ocurrencia pasa
	 console.log("Last Found " + name + " at position " + lastPos );
})();