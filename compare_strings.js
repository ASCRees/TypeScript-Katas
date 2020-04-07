//Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//If no occurrences can be found, a count of 0 should be returned. The first argument can be an empty string. The second string argument must be of at least length 1.
function compareStrings(searchString, comparison) {
    if (searchString.length == 0) {
        return -1;
    }
    return [...searchString].filter((i) => i === comparison).length;
}
console.log(compareStrings("hello there how the hell are you paul", "l"));
//# sourceMappingURL=compare_strings.js.map