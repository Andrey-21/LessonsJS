//HW lesson 2 slide 8
//1
const objPhone = {
    product: 'iPhone'
};
//2
objPhone.price = 1000;
objPhone.currency = 'dollar';
//3
objPhone.details = {
    model: 'iPhone7',
    color: 'Black'
};

// HW lesson 2 slide 10

//1
let string = 'i am in the easycode';
let newStr = '';

for (let i = 0; i < string.length; i++) {
    if (i === 0) {
        newStr += string[i].toUpperCase()
    } else if (string[i] === ' ') {
        newStr += string[i] + string[++i].toUpperCase();
    } else {
        newStr += string[i]
    }
}

//3
let str = 'tseb eht ma i';
let newStr = '';

for (let i = str.length - 1; i >= 0; i-- ) {
    newStr += str[i]
}


//3
let num = 10;
let sum = 1;
for (let i = 1; i <= num; i++) {
    sum = sum * i
};

//4
let string = 'JavaScript is a pretty good language';
let newStr = '';

for (let i = 0; i < string.length; i++) {
    if (i === 0 && string[i] !== ' ') {
        newStr += string[i].toUpperCase();
    } else if (string[i] === ' ') {
        newStr += string[++i].toUpperCase();
    } else {
        newStr += string[i];
    }
}

//5
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let newArr = [];
for ( let item of numArr) {
    if (item % 2) {

        newArr.push(item)
    }
}

//6
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};

for (let key in list) {
    if (typeof list[key] !== 'number') {
        list[key] = list[key].toUpperCase()
    }
}

//HW lesson 2 slide 4

//1
let a = 'block';


switch (a) {
    case "block": console.log('block')
    case "none": console.log('none')
    case  "inline": console.log('inline')
    case "other": console.log('other');
}

//2

//2.1
let inner = 'hidden';

switch (inner) {
    case "hidden": inner = 'visible';
    case "else": inner = 'hidden'
}


//2.2
let test = 0;

switch (test) {
    case 0: test = 1;
    case test < 0: test = 'less then zero'
    case test > 0 : test = test *10;

}


//2.3
let car = {name: "Lexus", age: 10, create: 2008, needRepair: false};

switch (car) {
    case car.age > 5: console.log('Need repair')
    case car.needRepair: car.needRepair = true;
}
