// HW lesson 4 Slide 7

//2
// let arrOfNum = [12, 4, 50, 1, 0, 18, 40];
//
// arrOfNum.forEach((arr, index) => {
//       if (index === 0) {
//         console.log(false)
//       } else {
//         console.log(true)
//       }
//     }
// );

//3

// let arrWords = ['yes', 'hello', 'no', 'easycode', 'what'];
//
// arrWords.forEach((array, index) => {
//
//   for (let item = 0; item < array.length; item++) {
//     if (index > 3) {
//       console.log(true)
//     }
//   }
// });

//4

// let arrChar = [
//   {char: "a", index: 12},
//   {char: "w", index: 8},
//   {char: "Y", index: 10},
//   {char: "p", index: 3},
//   {char: "p", index: 2},
//   {char: "N", index: 6},
//   {char: " ", index: 5},
//   {char: "y", index: 4},
//   {char: "r", index: 13},
//   {char: "H", index: 0},
//   {char: "e", index: 11},
//   {char: "a", index: 1},
//   {char: " ", index: 9},
//   {char: "!", index: 14},
//   {char: "e", index: 7}
//   ];
//
// arrChar.forEach((index, arr) => {
//
// });
//
// const makeWords = arrChar.reduce( (acc, element) => {
// return acc + element
// },'');
//
// console.log(makeWords);

// HW lesson 4 Slide 10 - 11

//1

// let arrArrs = [
//   [14, 45],
//   [1],
//   ['a', 'c', 'd']
// ];
//
//arrArrs.sort();


//2

// let arrCores = [
//   {cpu: 'intel', info: {cores: 2, сache: 3}},
//   {cpu: 'intel', info: {cores: 4, сache: 4}},
//   {cpu: 'amd', info: {cores: 1, сache: 1}},
//   {cpu: 'intel', info: {cores: 3, сache: 2}},
//   {cpu: 'amd', info: {cores: 4, сache: 2}}
// ];
//
// arrCores.sort((a, b) => {
//   if (a.info.cores < b.info.cores) {
//     return -1;
//   }
//   if (a.info.cores > b.info.cores) {
//     return 1;
//   }
//   return 0;
// });
//
// console.log(arrCores);

//3
// let products = [
//   {title: 'prod1', price: 5.2},
//   {title: 'prod2', price: 0.18},
//   {title: 'prod3', price: 15},
//   {title: 'prod4', price: 25},
//   {title: 'prod5', price: 18.9},
//   {title: 'prod6', price: 8},
//   {title: 'prod7', price: 19},
//   {title: 'prod8', price: 63}
// ];
//
// products.sort( (a, b) => {
//   if (a.price <= 15 || b.price >= 25) {
//     return a.price -b.price
//   }
// });
//
// console.log(products);

//Slide 4 - 5

//1


function f(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    return callback(arr[i], i);
}


}
f(['my', 'name', 'is', 'Trinity'], (value, index) => {

});


//2

function every(arr, callback) {
    for (let item = 0; item < arr.length; item++) {
      if (arr[item] < 5) {
        return true
      } else {
        return false
      }
    }
}

every([1, 2, 3, 4, 5], (array, element, index) => {

});
