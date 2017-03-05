
(function() {
	var nums = [];
	for(var i = 0; i < 10; ++i) {
		nums[i] = i+1;
	}

	var samenums = nums;
	console.log(nums);
	console.log(samenums);

	// i = 0;
	// nums[0] = 0 + 1;
	// i = 1;
	//nums[1] = 1 + 1;
	// i = 2;
	// nums[2] = 2 + 1;

	//nums = [1, 2, 3];


	nums[0] = 400;
	console.log(samenums[0]);
	// En este ejemplo si tratamos de cambiar la posicion 0 en nums por 400
	// tambien afectara la posicion 0 en el array samenums
})();

(function() {
	var nums = [];
	for(var i = 0; i < 10; ++i) {
		nums[i] = i+1;
	}
	console.log(nums);

	function copy(arr1, arr2) {
		for(var i = 0; i < arr1.length; ++i) {
			arr2[i] = arr1[i];
		}
	} // copy funciton

	// i = 0;
	// arr2[0] = arr1[1]

	var samenums = [];
	copy(nums, samenums);

	nums[0] = 400;
	console.log(nums);
	console.log(samenums);

	// En esto ejemplo como se esta haciendo una copia de el array
	// a la hora de alterar la posicion 0 del arry1 no va a afectuar
	// al array2

})();
