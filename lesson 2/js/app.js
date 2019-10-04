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
        newStr += string[i];
        newStr += string[i + 1].toUpperCase();
        i++
    } else {
        newStr += string[i]
    }
}

//2
let num = 10;
let sum = 1;
for (let i = 1; i <= n; i++) {
    sum = sum * i
}