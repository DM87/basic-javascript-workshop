//verify that input is a string
function checkString(x){
    if(!x.typeof === 'string'){
        throw new Error("Expected a string")
    }
}

//takes a string and returns the first character of the string.
function firstLetter(x){
    checkString(x);
    return x[0]
}
console.log(firstLetter('find the first letter'))

//returns the last character of a string
function lastLetter(x){
    checkString(x);
    return x[x.length - 1]
}
console.log(lastLetter('find the last letter'))

//returns the character at the position represented by the number
function searchString(string,y){
    checkString(string);
    return string[y - 1]
}
console.log(searchString('find the tenth letter', 10))

//function that adds two numbers together
//when we pass a non number we receive the number NaN
function add(x,y){
    return x + y
}
console.log(add(3,4))

//function that multiplies two numbers together
//when we pass a non number we receive the number NaN
function multiply(x,y){
    return x * y
}
console.log(multiply(3,4))

//If the string is ‘add’, then return the sum of the numbers. 
//If the string is ‘subtract’, return the difference. 
//If the string is ‘mult’, return the product. 
//If the string is ‘div’, return the ratio. Otherwise return 0.
function calc(string,y,z){
    if(string === 'add'){
        return y + z;
    } else if (string === 'substract'){
        return y - z;
    } else if (string === 'mult'){
        return y * z;
    } else if (string === 'div'){
        return y / z;
    } else {
        return 0;
    }
}
console.log(calc('add',3,5))
console.log(calc('substract',3,5))
console.log(calc('mult',3,5))
console.log(calc('div',3,5))
console.log(calc('random',3,5))

//returns the string repeated that many number of times.
function repeat(string,number){
    var i = 0;
    for (i = 0; i < number; i++){
        console.log(string);
    }
  }
 console.log(repeat('repeat', 4))
 
 //returns the reverse of that string
 function reverse(x){
     var i = x.length;
     var y = ''
     while (i > 0){
         y += x.substring(i - 1, i);
         i--
     }
     return y;
 }
 console.log(reverse('reverse'))
 
 //returns the factorial
 function factorial(x){
     if (x === 0){
         return 1;
     } else {
         return x * factorial(x - 1);
     }
 }
 
console.log(factorial(7))

//returns the longest word in that phrase
function longestWord(str){
    var words = str.split(' ')
    var longest = '';
    for (var i = 0; i < words.length; i++){
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
     return longest;
}
console.log(longestWord('Hi, My name is Daniel'))
 
 //returns the same phrase with every word capitalized
 function upperCase(sentence){
     sentenceSplit = sentence.split(' ')
     for ( var i = 0; i < sentenceSplit.length; i++) {
         sentenceSplit[i] = sentenceSplit[i].charAt(0).toUpperCase() + sentenceSplit[i].slice(1).toLowerCase();
     }
     return sentenceSplit.join(' ')
 }
 console.log(upperCase('ThiS IS a test to SENTENce cAse.'))
 
 //returns the largest number of the array
 function largestNum(array){
     var bigNum = 0;
     for (var i = 0; i< array.length; i++){
         if (array[i] > bigNum){
             bigNum = array[i]
         }
     }
     return bigNum;
 }
 
console.log(largestNum([1,2,5,7,3,4]))
 
 //The filtered array should only contain the truthy values from the initial array
 function lieDetector(array){
     var truthies = []
     for (var i = 0; i<array.length; i++){
         if (!!array[i] == true) {
            truthies.push(array[i]);
         }
     }
     return truthies;
 }
 console.log(lieDetector([true,false,'',0,3,'Hello',true]))
 
 //returns the sum of all the numbers in the array.
 function sumArray(array){
     var total = 0
     for (var i = 0; i<array.length; i++){
         total += array[i];
     }
     return total;
 }
 console.log(sumArray([1,2,5,7,3,4]))
 
 //returns a new array of unique elements from 2 other arrays
 function uniqueArray(array1,array2){
    for (var i = 0; i < array1.length; i++){
        var uniqueValues = []
        if (array2.indexOf(array1[i]) === -1 ){
            uniqueValues.push(array1[i])
        }
        for (var x = 0; x< array2.length; x++) {
            if (array1.indexOf(array2[x]) === -1) {
            uniqueValues.push(array2[x])
        }
    } 
} return uniqueValues
}
 
 console.log( uniqueArray ([1,2,3], [1,2,4,5]) )