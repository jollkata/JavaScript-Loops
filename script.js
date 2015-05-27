$(document).ready(function() {
    firstProblem();
	secondProblem();
	thirdProblem();
	fourthProblem();
});

//Problem 1
function firstProblem(){
	console.log('Problem 1');
	var number = Math.floor(Math.random() * 100),
	i,
	arr = [];
	for(i = 1; i <= number; i += 1){
		arr.push(i);
	}
	console.log(arr);
};// end of function

//Problem 2
function secondProblem(){
	console.log('\nProblem 2');
	var number = Math.floor(Math.random() * 100),
	i,
	arr = [];
	for(i = 1; i <= number; i += 1){
		if((i % 3) && (i % 7)) {
			arr.push(i);
		}
	}
	console.log(arr);
};// end of function

//Problem 3
function thirdProblem(){
	console.log('\nProblem 3');
	var number = Math.floor(Math.random() * 100),
	i,
	arr = [],
	min = 1,
	max = 1;
	for(i = 1; i <= number; i += 1){
		arr.push(i);
		if(min > i){
			min = i;
		}
		if(max < i){
			max = i;
		}
	}
	console.log('sequence: ' + arr);
	console.log('max: ' + max);
	console.log('min: ' + min);
};// end of function

//Problem 4
function fourthProblem(){
	console.log('\nProblem 4');
	var smallest,
        largest,
        result,
        prop,
		arr = [document, window, navigator], 
		i,
		len = arr.lenght;
	for(var elm in arr){
		for (prop in arr[elm]) {
			smallest = 'zzz';
			largest = '';
			if (prop < smallest) {
				smallest = prop;
			}
			if (prop > largest) {
				largest = prop;
			}
		}
		console.log('\t The largest in ' + arr[elm] + ' is: ' + largest + ' and the smallest is: ' + smallest);
	}
};// end of function
