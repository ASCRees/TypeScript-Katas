// Take a number and then sums every digit in the number
// So 123 would sum
// 1+2, 1+3, 2+3
// To give 3,4,5

class SumAllDigits {
	private sumAllInArrayForOneElement(indexofval: number, arrofNums: Array<number>): Array<number> {
		let currElement: number = arrofNums[indexofval];
		let partsum: Array<number> = [];
		for (let i: number = indexofval + 1; i < arrofNums.length; i++) {
			partsum.push(currElement + arrofNums[i]);
		}
		return partsum;
	}

	public sumEveryDigit(numbertosum: number): Array<number> {
		let arrofNums: Array<number> = [...numbertosum.toString()].map(Number);
		let finalSums: Array<number> = [];
		for (let i: number = 0; i < arrofNums.length; i++) {
			Array.prototype.push.apply(finalSums, this.sumAllInArrayForOneElement(i, arrofNums));
		}

		return finalSums;
	}
}

let sumAllDigits: SumAllDigits = new SumAllDigits();
let startingVal: number = 23789;
console.log("Starting Value is " + startingVal.toString());
console.log(sumAllDigits.sumEveryDigit(startingVal));
