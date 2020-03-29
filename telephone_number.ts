//Takes an 10 digit number and outputs it formatted as a US telephone number.

let createPhoneNumber = a => {
	let arrNums: Array<number> = Array.from(String(a), Number);
	let result = "(" + arrNums.slice(0, 3).join("") + ") " + arrNums.slice(3, 6).join("") + "-" + arrNums.slice(6, 10).join("");
	return result;
};

console.log("");
console.log("Starting with " + 1234567890);
console.log("");
console.log("Telephone Number is " + createPhoneNumber(1234567890));
console.log("");
