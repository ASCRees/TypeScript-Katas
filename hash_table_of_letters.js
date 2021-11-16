// Takes a string and produces a hash table indicating the number of occurences of each letter in the string.
function hashTable(startingString) {
    let countArray = [];
    [...startingString].forEach((val, index) => {
        countArray[val.toUpperCase()] != undefined ? countArray[val.toUpperCase()]++ : (countArray[val.toUpperCase()] = 1);
    });
    return countArray;
}
console.log(hashTable("Hello there world dude"));
//# sourceMappingURL=hash_table_of_letters.js.map