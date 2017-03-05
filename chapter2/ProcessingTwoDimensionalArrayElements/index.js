var grades = [
	[89,77,78],
	[76,82,81],
	[91,94,89]
];

var total = 0;
var average = 0.0;

for(var row = 0; row < grades.length; ++row) {
	for(var col = 0; col < grades[row].length; ++col) {
		total += grades[row][col];
	}
	average = total / grades[row].length;
	console.log("Student " + parseInt(row+1).length + " Average: " + average.toFixed(2) );
	total = 0;
	average = 0.0;
}