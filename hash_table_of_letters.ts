// Takes a string and produces a hash table indicating the number of occurences of each letter in the string.

function hashTable(startingString: string): number[] {
	let countArray: number[] = [];

	[...startingString].forEach((val, index) => {
		countArray[val.toUpperCase()] != undefined ? countArray[val.toUpperCase()]++ : (countArray[val.toUpperCase()] = 1);
	});
	return countArray;
}

console.log(hashTable("Hello there world dude"));
