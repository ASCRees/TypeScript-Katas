// An array "arr" consisting of n integers is given. The dominator of arr is the value that occurs in more than half of the elements of arr.
// If array does not have a dominator. All values in arr will be >=0.

class dominatesExample {
	public dominates(startingArray: Array<number>): number {
		let countArray: number[] = [];

		for (let index = 0; index < startingArray.length; index++) {
			countArray[startingArray[index]] != undefined ? countArray[startingArray[index]]++ : (countArray[startingArray[index]] = 1);
			if (countArray[startingArray[index]] > Math.floor(startingArray.length / 2)) {
				return startingArray[index];
			}
		}
		return -1;
	}
}

let arr: Array<number> = [3, 3, 4, 2, 5, 3, 4, 3, 3, 7, 3, 2, 3, 8, 3, 3, 7];

let dom = new dominatesExample();

console.log(dom.dominates(arr));
