//1
function multiply() {
  if (!arguments.length) return 0;

  let resolt = 1;

  for (let i of arguments) {
    resolt = resolt * i;
  }

  return resolt;
}

//2
function returnStr(string = 'test') {
  let newStr = '';

    for (let i = string.length - 1; i >= 0; i--) {
      newStr += string[i]
    }

  return newStr;
}

returnStr ();

//3

function getCodeStringFromTex(string) {

  let localStr = '';

  for (let i = 0; i < string.length; i++) {

    localStr += string.charCodeAt(i)
    if (i < string.length - 1) {
      localStr += ' '
    }
  }
  return localStr;
}

let charCodeStr = console.log(getCodeStringFromTex('hello'));

//4

function lotary(number) {

  if (number < 0 || number > 10) return 'неправильное число';

  const numRandom = Math.floor(Math.random() * 10 + 1);
  console.log(numRandom);

if (numRandom === number) {
  return "Вы угадали"
}
else {
  return 'Вы не угадали'
}
}

console.log(lotary(3));

//5

function getArray(n) {
  arrNumber = [];

  for (let i = 1; i <= n; i++) {
    arrNumber.push(i)
  }
  return console.log(arrNumber)
}

getArray(10);


//6

function getArr(arr) {
  let newArr = [];
  let iter = 1;

  while (iter <= 2) {
      iter++;

    for (let item of arr) {
      newArr.push(item);
    }
  }
  return console.log(newArr);
}

getArr([1, 2, 3]);

//7

function getArrWithotfirstIndex() {

  for (let item of arguments) {
    item.shift(0);
  }
  return arguments;
}

let arr = console.log(getArrWithotfirstIndex(
    [1, 2, 3],
    ['a', 'b', 'c']
));


//8

let users = [{
  name: 'Andrey',
  age: 22,
  gender: 'male'
},
  {
    name: 'Anna',
    age: 20,
    gender: 'female'
  },
  {
    name: 'Oleg',
    age: 25,
    gender: 'male'
  }];

function funcGetUsers(arr, key, value) {
  if (!arr && !key && !value) return 'empty information about user';

  let newUsers = [];

  for (item of arr) {

    if (item[key] === value) {
      newUsers.push(item);

    }
  }

  return newUsers;
}

console.log(funcGetUsers(users, 'gender', 'male'));


//9
let arrOfNum = [-2, 3, 4, -5, -6, 2, 4, -56];

function quantityNumber(arr) {
  let minusNum = 0;
  let plusNum = 0;

  for (let item of arr) {
    if (item < 0) {
      minusNum++;

    } else if (item > 0) {
      plusNum++;

    }

  }

  return `кол-во отрицательных ${minusNum} , кол-во положительніх ${plusNum}`
}

console.log(quantityNumber(arrOfNum));

//10

let arrNum = [1, 2, 3, 5, 8, 9, 10];

function objNum(arr) {
  if (!arr.length) return 'empty array';

  let newArr = [];

  for (let item of arr) {

    newArr.push({
      digit: item,
      odd: (item % 2) ? true : false
    });
  }

  return newArr;
}
console.log(objNum(arrNum));
