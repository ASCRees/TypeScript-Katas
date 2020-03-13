// This function takes a number and sums the digits then recursively reduces it to a single digit.
// For example start with 132189 and then sums the digits to get 24. 
// As 24 is not a single digit these digits are summed to get 6 

function sumofdigits(valuetosum:number):number
{
    let arrNums:Array<number> = Array.from(String(valuetosum),Number);  

    let sumofNums:number = arrNums.reduce((a,b)=>a+b);

    console.log(arrNums.join(" + "));
    if (sumofNums>=10)
    {
        console.log(sumofNums.toString()+" ...");
        return sumofdigits(sumofNums);
    }
    else
    {
        return sumofNums;
    }
}

let startingValue:number =123456789987654321;
console.log("Starting Value is "+startingValue.toString());
console.log(sumofdigits(startingValue));

