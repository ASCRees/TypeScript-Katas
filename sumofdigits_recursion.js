// This function takes a number and sums the digits then recursively reduces it to a single digit.
// For example start with 132189 and then sums the digits to get 24. 
// As 24 is not a single digit these digits are summed to get 6 
function sumofdigits(valuetosum) {
    let arrNums = Array.from(String(valuetosum), Number);
    let sumofNums = arrNums.reduce((a, b) => a + b);
    console.log(arrNums.join(" + "));
    if (sumofNums >= 10) {
        console.log(sumofNums.toString() + " ...");
        return sumofdigits(sumofNums);
    }
    else {
        return sumofNums;
    }
}
let startingValue = 123456789987654321;
console.log("Starting Value is " + startingValue.toString());
console.log(sumofdigits(startingValue));
//# sourceMappingURL=sumofdigits_recursion.js.map