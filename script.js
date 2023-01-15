"use strict";
let factorial = (num) => {
	let result = 1;
	for (let i = 0; i <= num; i++) {
		result *= i;
	}
	return result;
}

function oddNum(target) {
	let strVar = "";
	for (let i = 1; i < target; i+=2) {
		strVar+= " " + i;
		//alert(i);
	} 
	alert(strVar);
}

oddNum(200);
