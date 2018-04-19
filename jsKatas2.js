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
    // or even better

function getRemainder2(numberator,denominator){
    let remainder = numberator % denominator;
    return remainder; 
}
console.log(getRemainder(18,5));
console.log(getRemainder(14,3));
    // or even more betterer

const getRemainder3 = (numberator, denominator) => {return numberator % denominator};
console.log(getRemainder3(9,5));
console.log(getRemainder3(10,3));

// 6) Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
let list1 = "1 3 9 5 3 7 3 1 1 8 5"
let list2 = "Bob, Edwin, Morgan, Mike, Bob, Stan, Kavitha, Declan, Kavitha, David, Morgan, Bob,"
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
    let list3 = "1, 3, 9, 5, 3, 7, 3, 1, 1, 8, 5"
    let list4 = "Bob, Edwin, Morgan, Mike, Bob, Stan, Kavitha, Declan, Kavitha, David, Morgan, Bob"
    function getDistinctValues7(list){
        let distinctVals7 = {};
        let valueList7 = list.split(", ");
        // console.log(list);
        // console.log(valueList7);
        
        for (let i=0; i<valueList7.length; i++){
            if (distinctVals7[valueList7[i]] == null){
                distinctVals7[valueList7[i]] = 1;               
            }else{
                distinctVals7[valueList7[i]] += 1;
            } 
        }        // console.log(distinctVals7)        return distinctVals7;
        return(distinctVals7);
    }
    
    
    console.log(getDistinctValues7(list3));
    console.log(getDistinctValues7(list4));
 



// 8) Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).
const objectList8 = {"a": 1, "b": 7, "c": 3, "d": 14};
sum8 = objectList8["a"] + objectList8["b"] + objectList8["c"] - objectList8["d"];


console.log(sum8);
console.assert(evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) === -3);