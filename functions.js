function max(a, b){
    if(a > b)return a;
    else return b;
}

function maxOf3(a, b, c){
    if(b > c){
        if(a > b){
            return a;
        }else{
            return b;
        }
    }
    return c;
}

function isVowel(char){
    return (["a","e","i","o","u"].includes(char) || ["a","e","i","o","u"].includes(char.toLowerCase()));
}

function sum(arr){
    return arr.reduce((x,y)=>x+y,0);
}

function multiply(arr){
    return arr.reduce((x,y)=>x*y, 1);
}

function reverse(str) {
    return str.split("").reverse().join("");
  }

function findLongestWord(arr){
    let longestWord = arr.sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
}

function filterLongWords(arr, i){
    return arr.filter(a => a.length > i);
}

const a = [1,3,5,3,3]; 
const multiplyBy3 = a.map(element => element * 3);

const equalTo3 = a.map(() => 3);

function product(arr){
    return arr.reduce((x,y)=>x*y, 1);
}
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found || expected.toString()===found.toString()) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}


  console.log(max(1,2))
  console.log(maxOf3(3,6,-1));
  console.log(isVowel("A"));
  console.log(sum([1,2,3,4,5]));
  console.log(multiply([1,2,3,4,5]));
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOf3(5,4,44) is 44  " + myFunctionTest(44, maxOf3(5, 4, 44)));
console.log("Expected output of maxOf3(55,4,44) is 55  " + myFunctionTest(55, maxOf3(55, 4, 44)));
console.log("Expected output of isVowel(a) is true  " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of isVowel(z) is false  " + myFunctionTest(false, isVowel("z")));
console.log("Expected output of sum([1,2,3,4,5]) is 15  " + myFunctionTest(15, sum([1,2,3,4,5])));
console.log("Expected output of multiply([1,2,3,4,5]) is true  " + myFunctionTest(120, multiply([1,2,3,4,5])));
console.log("Expected output of reverse(jag testar) is true  " + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of findLongestWord([dan, ritah, renatah]) is true  " + myFunctionTest("renatah", findLongestWord(["dan","renatah","ritah"])));
console.log("Expected output of filterLongWords([dan, ritah, renatah]) is true  " + myFunctionTest(["renatah","ritah"], filterLongWords(["dan","renatah","ritah"],3)));
console.log(`All elements multiplied by 3 => ${multiplyBy3} ${myFunctionTest([3, 9, 15, 9, 9], multiplyBy3)}`);
console.log(`Array with all elements equal to 3 => ${equalTo3} ${myFunctionTest([3, 3, 3, 3, 3], equalTo3)}`);
console.log(`Product of all elements => ${product(a)} ${myFunctionTest(135, product(a))}`);