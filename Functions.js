/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
  return l1 * l2;
}
console.log("Ex1", area(4, 5));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
console.log("Ex2", crazySum(5, 5));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/*function crazyDiff(a) {
  if (a - 19 > 0) {
    return Math.abs(crazyDiff(5, 19)) * 3;
  } else {
    return Math.abs(crazyDiff(5, 19));
  }
}
console.log("Ex3", crazyDiff(5));*/

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n == 400) {
    return "True";
  } else {
    return "False";
  }
}
console.log("Ex4 ", boundary(111));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

strivify(" Hello!");
function strivify(str) {
  if (str.startsWith("Strive")) {
    return str;
  } else {
    let withoutstrive = "Ex5 " + "Strive" + str;
    console.log(withoutstrive);
  }
}

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(n) {
  if (n % 3 == 0 || n % 7 == 0) {
    return "Multiple of 3 or 7";
  } else {
    return "Not multiple of 3 or 7";
  }
}
console.log("Ex6 ", check3and7(21));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Ex7 ", reverseString("Hello"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str2) {
  return str2.charAt(0).toUpperCase() + str2.slice(1);
  // str2.charAt(0).toUpperCase() +
  // str2.slice(1)
}

console.log("Ex8!!!", upperFirst("hello i am aaaa"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(str3) {
  return str3.slice(1, -1);
}
console.log("Ex9 ", cutString("Hello"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (q) {
  let arrWithNums = [];
  for (i = 0; i < q; i++) {
    arrWithNums.push(Math.floor(Math.random() * 10));
  }
  return arrWithNums;
};
console.log("Ex10", giveMeRandom(4));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
