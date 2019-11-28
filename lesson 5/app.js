// HW lesson 5 Slide 7-9

//1
// const rectangle = {
//   width: 300,
//   height: 200,
//   getSquare: function () {
//     return 'площадь ' + this.width * this.height
//
//   }
// };
// rectangle.getSquare();

//2

// const price = {
//   price: 10,
//   discount: '15%',
//   getPrice: function () {
//
//        return this.price
//
//   },
//   getPriceWithDiscount: function () {
//
//     return this.price - (parseInt(this.discount) / 100 * this.price);
//
//   }
// };
//
// console.log(price.getPrice());
// console.log(price.getPriceWithDiscount());

//3

// const object = {
//   height: 10,
//   heightIcr: function () {
//     return this.height + 1;
//   }
// };
//
// let newHeight = object.heightIcr();
// console.log(newHeight);


//4

// const numerator = {
//   value: 1,
//   double: function () {
//     return this.value * 2
//   },
//   plusOne: function () {
//     return this.value + 1
//   },
//   minusOne: function () {
//     return this.value - 1
//   }
// };
//
// console.log(numerator.double().plusOne().plusOne().minusOne());

//Slide 16 - 17

//1

// const retailPrice = {
//   products: { fruit: 15,
//   groats: 44,
//   vegetables: 24,
//   meat: 148,
//   fish: 95,
//   },
//
//   priceProduct: function (obj) {
//     let result = 0;
//
//   for (let key in obj) {
//     result += obj[key];
//   }
//
//     return result;
//   }
// };
// console.log(retailPrice.priceProduct(retailPrice.products));


