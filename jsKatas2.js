// 1) Reverse a string
function reverseString(string){
    return string.split("").reverse().join("");

}
console.log(reverseString("Edwin"));
console.log(reverseString("bob"));



// 2) Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseSentence(sentence){
    return sentence.split(" ").reverse().join(" ");

}
console.log(reverseSentence("Edwin is cool"));
console.log(reverseSentence("bob is cooler"));

// 3) Find the minimum value in an array
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



// 4) Find the maximum value in an array
function maxValue(array){
    let largest=array[0];
    for (let i=1; i<array.length; i++){
        if (array[i]>largest){
            largest=array[i];
        }
    }
    return largest;
}

console.log(maxValue([8, 1, 4, 9]));
console.log(maxValue(["Edwin", "Bob"]));

// 5) Calculate a remainder (given a numerator and denominator)
function getRemainder(numerator,denominator){
    let quotient = Math.floor(numerator/denominator);
    let remainder = (numerator-(Math.floor(numerator/denominator))*denominator);
    return remainder;
}
console.log(getRemainder(17,5));
console.log(getRemainder(13,3));



// 6) Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
let list1 = "1 3 9 5 3 7 3 1 1 8 5"
let list2 = "Bob, Edwin, Morgan, Mike, Bob, Stan, Kavitha, Declan, Kavitha, David, Morgan, Bob"
function getDistinctValues(list){
    let distinctVals = [];
    let valueList = list.split(" ");
    // console.log(list);
    // console.log(valueList);
    
    for (let i=0; i<valueList.length; i++){
        if (distinctVals.includes(valueList[i])){
            // i++;
        }else{
            distinctVals.push(valueList[i])
        } 
    }
    return distinctVals;
}

console.log(getDistinctValues(list1));
console.log(getDistinctValues(list2));



// 7) Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
    let list3 = "1 3 9 5 3 7 3 1 1 8 5"
    let list4 = "Bob, Edwin, Morgan, Mike, Bob, Stan, Kavitha, Declan, Kavitha, David, Morgan, Bob"
    function getDistinctValues(list){
        let distinctVals = [];
        let valueList = list.split(" ");
        // console.log(list);
        // console.log(valueList);
        
        for (let i=0; i<valueList.length; i++){
            if (distinctVals.includes(valueList[i])){
                
            }else{
                // distinctVals.push(valueList[i])

            } 
        }
        return distinctVals;
    }
    
    console.log(getDistinctValues(list3));
    console.log(getDistinctValues(list4));
 



// 8) Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).
