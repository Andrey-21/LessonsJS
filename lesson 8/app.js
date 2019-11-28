// HW lesson 8 slide 10 - 12

//1
// function minusNumber(num1) {
//
//   return function (num2) {
//     return num1 - num2;
//   }
// }
// const result = minusNumber();
// result();

//2
// function multiplyMaker(value = 0) {
//   let multiply = value;
//   return function (number = 0) {
//     return multiply * number;
//   }
// }

// const result = multiplyMaker(3);
//result(5)
//3
// const makeStr = (function (someStr) {
//
//   function makeString(str) {
//     someStr = str;
//     if (!str.value) {
//       someStr = '';
//     } else if (str === Number) {
//       value.toString()
//     }
//   }
//
//   function returnStr() {
//     return someStr;
//   }
//
//   function strLangth() {
//     return someStr.length;
//   }
//
//   function turnStr() {
//     for (let i = someStr; i > someStr.length; i--) {
//       return someStr[i]
//     }
//   }
// });

//4
// function calculate(number) {
//   let defoultNum = number;
//
//   function multiplication(number2) {
//     return number * number2
//   }
//
//   function subriction(number2) {
//     return number - number2;
//   }
//
//   function division(number2) {
//     return number / number2;
//   }
// }
