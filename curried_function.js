// Curried function - This is a type of function that accepts 
// multiple parameters one parameter at a time and return a 
// function after each parameter to accept the next parameter.
// This takes  one parameter a then returns a function that takes parameter b
// This can be written as a normal function  
function sumval1(a) {
    return function (b) {
        return a + b;
    };
}
console.log("sumval1 declared function - " + (sumval1(3)(2)).toString());
// or as an arrow function. This can be written two different ways. 
// One letting the types be assumed to be any type of value
let sumval2 = (a) => (b) => a + b;
// The ther be explicity declaring the types of each parameter
let sumval3 = (a) => (b) => a + b;
console.log("sumval2 arrow function - " + (sumval2(6)(2)).toString());
console.log("sumval3 arrow function explicit - " + (sumval3(3)(5)).toString());
// innerFunc holds the inner function thats return from the initil call to sumval1
let innerFunc = sumval1(5);
// Now call innerFunc and pass in a value.
let result1 = innerFunc(6);
console.log("Split the function calls" + result1.toString());
//# sourceMappingURL=curried_function.js.map