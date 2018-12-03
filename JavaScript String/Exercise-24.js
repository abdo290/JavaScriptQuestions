Write a JavaScript function to truncate a string to a certain number of words.

Test Data:
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output: 
"The quick brown fox"




JavaScript Code:

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

Copy
Sample Output:

The quick brown fox