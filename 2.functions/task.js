function getArrayParams(...arr) {
	var min = arr[0];
	var max = arr[0];
	var sum = 0;

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		if (current > max) {
			max = current;
		} else if (current < min) {
			min = current;
		}
		sum += current;
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}