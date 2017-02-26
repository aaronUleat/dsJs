
(function() {
	var sentence = "The quick brown fox jumped over the lazy dog";
	var words = sentence.split(" ");
	for(var i = 0; i < words.length; ++i) {
		console.log("word " + i + ": " + words[i]);
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
	console.log("First found " + name + " at position " + firstPos);
	 var lastPos = names.lastIndexOf(name);
	 console.log("Last Found " + name + " at position " + lastPos );
})();