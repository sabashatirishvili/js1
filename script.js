"use strict";
function factorial(num) {
	for (let i = 1; i < num; i++) {
		num*=i;
	}
}

console.log(factorial(8));
/*function oddNumbers(oddNumTo) {
	for(let n = 0; n < oddNumInput, n+=2) {

	}
}*/