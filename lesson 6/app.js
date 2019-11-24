//HW lesson 6 slide 7

// const head = document.head;
// console.log(head);
//
// const body = document.body;
// console.log(body);
//
// const bodyChild = document.body.children;
// console.log(bodyChild);
//
// const firstDiv = document.querySelector('div');
// console.log(firstDiv);
//
// const divChild = firstDiv.children;
// console.log(divChild);
// option 1
// let without = [];
//
// for (let item of divChild) {
//
//   if (item === divChild[0] || item === divChild[divChild.length -1]) {
//     continue
//   }
//   without.push(item);
// }
// console.log(without);

// option 2
// let without2 = [];
// [...divChild].forEach( (item) => {
//
//   if (item === divChild[0] || item === divChild[divChild.length - 1]) {
//     without2.push(item);
//   }
// });
//
// console.log(without2);

//slide 15

//1
// const paretnElement = document.querySelector('div article p');
//
// const mark = document.querySelector('div mark');
//
// const fu = (parent = true, element = false) => (element.parentElement === parent) ? true : false;
//
// console.log(fu(paretnElement, mark));


//2
// const links = document.querySelectorAll('ul a');
// console.log(links);

//3
//
// const ul = document.querySelector('ul');
// const uLNext = ul.nextElementSibling;
// const ulPrev = ul.previousElementSibling;

//additional task
// const form = document.querySelector('.form');
// const formBtn = document.querySelector('.btn');
//
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   if (form['name'].value.length < 2 || form['name'].value.length > 40) {
//     alert('mistake')
//   }
//
//   if (form['login'].value === '') {
//     alert('mistake2')
//   }
//
// let bigLetercount = 0;
//   let numberCount = 0;
//
//   for (let i of form['password'].value) {
//
//     if (!isNaN(i * 1)) {
//       numberCount++
//     }
//
//       if (i === i.toUpperCase() && isNaN(i * 1) && i.value < 8) {
//       bigLetercount++
//     }
//     console.log(isNaN(i * 1))
//   }
// });
//
// formBtn.addEventListener('click', function () {
//
// });
