"use strict";
let oddNumInput;
let numToTextInput;
let factorialInput;
let operation = prompt("Operation (Odd numbers to n, Number to text, Factorial)", "Odd numbers to n");
while (true) {
	switch(operation) {
		case "Odd numbers from 1 to n":
			oddNumInput = prompt("To");
			break;
		case "Number to text":
			numToTextInput = prompt("Number:");
			break;
		case "Factorial": 
		factorialInput = prompt("n:");
		break;
	}
}
/*function oddNumbers(oddNumTo) {
	for(let n = 0; n < oddNumInput, n+=2) {

	}
}*/