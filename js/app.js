// HW lesson 1 slide 10

let string = "some test string";
let value;
// //1
value = string[0];
value = string[string.length - 1];

//2
value = string[0].toUpperCase();
value = string[16 - 1].toUpperCase();

//3
value = string.indexOf("string");

//4
value = string.indexOf(" ", 5);

//5
value = string.substr(5, 4);

//6
value = string.slice(5, 9);

//7
let string = "some test string";
let newStr = "";

for (let index = 0; index < string.length; index++) {
    const someStr = string[index];

    if (index < 10) {
        newStr += someStr;
    }
}
//8
let a = 20;
let b = 16;
let string;

string = a.toString() + b.toString();

//HW lesson 1 slide 13

//1
let obj;
obj = Math.PI.toFixed(2);

//2
let numberr;
numberr = Math.max(5, 11, 16, 12, 51, 12, 13, 51);
numberr = Math.min(5, 11, 16, 12, 51, 12, 13, 51);

//3
let random;
random = Math.random().toFixed(2);

let random;
random = Math.random().toFixed(1) * 10 + 1;

//4
let num;
num = 0.6 + 0.7;

let numResolut = parseFloat(num.toFixed(1));

//5
let sum = "100$";
let sumStr = parseFloat(sum);

// HW lesson 2 slide 12
/*
let a = 0 || 'string'; // ‘string’;  0 - false, ‘string’ - true
let a = 1 && 'string'; // Все значение верные и оператор вернет последнее
let a = null || 25; 25; null - false; 25 - true
let a = null && 25; null; null - false; 
let a = null || 0 || 35; 35; 35 - true;
let a = null && 0 && 35; null; null - false

12 + 14 + '12'
3 + 2 - '1'
'3' + 2 - 1
true + 2
+'10' + 1
undefined + 2
null + 5
true + undefined

*/

//HW Lesson 2 slide 16-17

//1
let exam = "hidden";

if (exam === "hidden") {
    exam = "visible";
} else {
    exam = "hidden";
}

//2
let examp = 0;

if (examp === 0) {
    examp = 1;
}
if (examp < 0) {
    examp = "less then zero";
}
if (examp > 0) {
    examp = examp * 10;
}

//3
let car = { name: "Lexus", age: 10, create: 2008, needRepair: false };

if (car.age > 5) {
console.log("needRepair");
car.needRepair = true;
} else {
    car.needRepair = false;
}

//4
let item = {name: 'Intel core i7',
    price: '100$',
    discount: '15%'};

if (item.discount) {
    item.priceWithDiscount = parseFloat(item.price) - parseFloat(item.discount);
} else  {
    console.log('some action')
}

//5
let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10;
let max = 20;

if(product.price >= max || product.price <= min) {
    console.log(product.name)
} else {
    console.log('no product found');
}