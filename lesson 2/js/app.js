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