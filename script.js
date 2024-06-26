const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, 5) => {
	let res = []
	let currSubarr = [];
	let currSum = 0;

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] + currSum <= n){
			currSubarr.push(arr[i]);
			currSum += arr[i];
		}else{
			res.push(currSubarr);
			currSubarr.push(arr[i]);
			currSum = arr[i]
		}
	}

	if(currSubarr.length>0){ 
		res.push(currSubarr);
	}

	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
