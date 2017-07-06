// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
    // Your answer here
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
}
console.log(max(3,2));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    // Your answer here
    if (num1 > num2) {  // num1 > num2
        if (num1 > num3) { //num1 > num2, num1 > num3
          return num1;
        } else { //  num3 > num1 > num2
          return num3;
        }
    } else { // num2 > num1
      if (num2 > num3) { // num2 > num1, num2 > num3
        return num2;
      } else { // num3 > num2 > num1
        return num3;
      }
    }
}

console.log(maxOfThree(14, 10, 22));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
      return true;
    } else {
      return false;
    }
}
console.log(isVowel('a'));
console.log(isVowel('e'));
console.log(isVowel('i'));
console.log(isVowel('o'));
console.log(isVowel('u'));

console.log(isVowel('b'));
console.log(isVowel('c'));
console.log(isVowel('d'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (num1, num2) {
  return num1 + num2;
}
console.log(sum(3,4));  // 3 + 4 = 7

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg (num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(avg(10, 12, 17));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength (string) {
  return string.length;
}
console.log(getLength('abcdefg')); // should return 7
console.log(getLength("The quick brown fox jumped over the lazy dogs."));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (num1, num2) {
  if (num2 > num1) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(13,27));
console.log(greaterThan(27,13));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet (name) {
  return ("Hello, " + name + "!");
}
console.log(greet("Jeremy")); // should log "Hello, Jeremy!"

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (adj1, adj2, noun1, adj3, noun2) {
  return ("The " + adj1 + " " + adj2 + " " + noun1 + " jumped over the " + adj3 + " " + noun2 +".");
}

console.log(madlib('quick', 'brown', 'fox', 'lazy', 'dogs'));
console.log(madlib('stupid', 'angry', 'bastard', 'sleeping', 'hobos'));
console.log(madlib('messed-up', 'flying', 'monkey', 'prancing', 'dancer'));
