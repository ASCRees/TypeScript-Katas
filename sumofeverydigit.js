// Take a number and then sums every digit in the number
// So 123 would sum
// 1+2, 1+3, 2+3
// To give 3,4,5
class SumAllDigits {
    sumAllInArrayForOneElement(indexofval, arrofNums) {
        let currElement = arrofNums[indexofval];
        let partsum = [];
        for (let i = indexofval + 1; i < arrofNums.length; i++) {
            partsum.push(currElement + arrofNums[i]);
        }
        return partsum;
    }
    sumEveryDigit(numbertosum) {
        let arrofNums = [...numbertosum.toString()].map(Number);
        let finalSums = [];
        for (let i = 0; i < arrofNums.length; i++) {
            Array.prototype.push.apply(finalSums, this.sumAllInArrayForOneElement(i, arrofNums));
        }
        return finalSums;
    }
}
let sumAllDigits = new SumAllDigits();
let startingVal = 23789;
console.log("Starting Value is " + startingVal.toString());
console.log(sumAllDigits.sumEveryDigit(startingVal));
//# sourceMappingURL=sumofeverydigit.js.map