let count = 13;
let figmaJob;
let personID;

personID  = Math.floor(Math.random()*count+1);
figmaJob  = Math.floor(Math.random()*count+1);

document.getElementById("person").innerHTML = personID;
document.getElementById("job").innerHTML = figmaJob;

//1. ამ დავალების დასრულება
//2. სახელების JSON ფორმატში შეტანა




















/*function randomselect(arr1, arr2) {
	let obj;
	arr1 = arr1.sort(function() {
		return Math.random() - 0.5;
	});
	arr2 = arr2.sort(function() {
		return Math.random() - 0.5;
	})
	if(arr1.length === arr2.length) {
	for (let i = 0; i < arr1.length; ++i) {
		console.log(`${arr1[i]}: ${arr2[i]}`);
	}
 }
}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6];
randomselect(arr1, arr2);*/
