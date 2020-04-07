function hashTable(startingString: string): number[] {
	let countArray: number[] = [];

	[...startingString].forEach((val, index) => {
		countArray[val.toUpperCase()] != undefined ? countArray[val.toUpperCase()]++ : (countArray[val.toUpperCase()] = 1);
	});

	return countArray;
}

console.log(hashTable("Hello there world"));
