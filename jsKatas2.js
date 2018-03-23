// Reverse a string
function reverseString(string){
    return string.split("").reverse().join("");

}
console.log(reverseString("Edwin"));
console.log(reverseString("bob"));


// Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseSentence(sentence){
    return sentence.split(" ").reverse().join(" ");

}
console.log(reverseSentence("Edwin is cool"));
console.log(reverseSentence("bob is cooler"));

// Find the minimum value in an array
function minValue(array){
    let smallest=array[0];
    for (let i=1; i<array.length; i++){
        if (array[i]<smallest){
            smallest=array[i];
        }
    }
    return smallest;
}

console.log(minValue([8, 1, 4, 9]));
console.log(minValue(["Edwin", "Bob"]));


// Find the maximum value in an array
// Calculate a remainder (given a numerator and denominator)
// Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
// Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
// Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).
