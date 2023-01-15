"use strict";
function factorial(num) {
	let result = 1;
	if(num==1 || num==0) {
		return 1;
	}
	for (let i = num - 1; i >= 1; i--)  {
		num*=i;
	}
	return num;
}

function oddNum(target) {
	let strVar = "";
	for (let i = 1; i < target; i+=2) {
		strVar+= " " + i;
		//alert(i);
	} 
	alert(strVar);
}
alert(factorial(5));

oddNum(200);
