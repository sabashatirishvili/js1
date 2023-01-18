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
		if(target===0) {
			alert(i);
			break;
		}
		//alert(i);
	} 
	if(target < 0) {
		for(let i = 1; i > target; i-=2) {
			for (let i = 1; i < target; i+=2) {
				strVar+= " " + i;
				if(target===0) {
					alert(i);
					break;
				}
		}
	}
	alert(strVar);
}
function numToText(number) {
	const numbers = {
		ones: {
			1:"One",
			2:"Two",
			3:"Three",
			4:"Four",
			5:"Five",
			6:"Six",
			7:"Seven",
			8:"Eight",
			9:"Nine"
		}
	}
 } 
}
alert(factorial(5));

oddNum(200);
