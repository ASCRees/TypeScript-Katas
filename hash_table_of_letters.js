function hashTable(startingString) {
    let countArray = [];
    [...startingString].forEach((val, index) => {
        countArray[val.toUpperCase()] != undefined ? countArray[val.toUpperCase()]++ : (countArray[val.toUpperCase()] = 1);
    });
    return countArray;
}
console.log(hashTable("Hello there world"));
//# sourceMappingURL=hash_table_of_letters.js.map