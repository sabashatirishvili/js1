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
	} 
	if(target < 0) {
		for(let i = 1; i > target; i-=2) {
			for (let i = 1; i < target; i+=2) {
				strVar+= " " + i;
		}
	}
}
if (target === 0) {
	strVar = 1;
}
alert(strVar);
}














/*function numToText(number) {
	const numbers = {
			"1":"One",
			"2":"Two",
			"3":"Three",
			"4":"Four",
			"5":"Five",
			"6":"Six",
			"7":"Seven",
			"8":"Eight",
			"9":"Nine",

			"10": "Ten",
			"20": "Twenty",
			"30": "Thirty",
			"40": "Forty",
			"50": "Fifty",
			"60": "Sixty",
			"70": "Seventy",
			"80": "Eighty",
			"90": "Ninety",

			"11":"Eleven",
			"12": "Twelve",
			"13": "Thirteen",
			"14":"Fourteen",
			"15":"Fifteen",
			"16": "Sixteen",
			"17":"Seventeen",
			"18":"Eighteen",
			"19":"Nineteen",
		
			"hundred":"Hundred",
			"thousand": "Thousand",
			"million": "Million"
		
	}
	var split = (""+number).split("");
	for(let i = split.length - 1; i >= 0; --i) {
		let last;
		if (split[i-1] == 1) {
			let joined = split[i].toString() + split[i-1].toString;
			last = numbers.joined;
		} else {
			last = numbers.split[i];
		}
	let result = last;
	console.log(result);
 }
}
 numToText(17);*/
