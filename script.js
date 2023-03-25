function fib(num) {
	const newArr = [];
	if (typeof(num)==='number') {
		for (let i = 0; i < num; i++) {
			const arr = [0, 1];
			if (i < 2) {
				newArr[i] = arr[i];
			} else {
				newArr[i] = newArr[i-1]+newArr[i-2];
			}		
		}
		
	}
	console.log(newArr);
	let fibStr = newArr.join(' ');
	console.log(fibStr);
	return fibStr;
}
fib(3);