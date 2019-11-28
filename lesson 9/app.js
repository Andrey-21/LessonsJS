// HW lesson 9 slide 21 -24

//1
// function Planet(name) {
//   this.name = name;
//   this.getName = function () {
//     return 'Planet name is ' + this.name;
//   }
// }
//
// function PlanetWithSatellite(planetName, nameSatellite) {
//   Planet.call(this, planetName);
//   this.nameSatellite = nameSatellite;
//   this.getSatelliteName = function () {
//     return this.getName() + 'The satellite is' + this.nameSatellite;
//   }
// }
// let earth = new PlanetWithSatellite('earth ', 'month');

// Variant 2

// function Planet(name) {
//   this.name = name;
// }
//
// Planet.prototype.getName = function () {
//   return 'Planet name is ' + this.name;
// };
//
// function PlanetWithSatellite(planetName, nameSatellite) {
//   Planet.call(this, planetName);
//   this.nameSatellite = nameSatellite;
//   this.getSatelliteName = function () {
//     return this.getName() + 'The satellite is' + this.nameSatellite;
//   }
// }
//
// PlanetWithSatellite.prototype = Object.create(Planet.prototype);
// PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;
//
// let earth = new  PlanetWithSatellite('Earth', 'month').getSatelliteName();

//2
// class Bylding {
//   constructor(name, quantityFloor) {
//     this.name = name;
//     this.quantityFloor = quantityFloor;
//   }
//
//   getQuantityFloor() {
//   return this.quantityFloor;
//   }
// }
//
// class LiveHous extends Bylding {
//   constructor(name, quantityFloor, quantityApartment) {
//     super(name, quantityFloor);
//     this.quantityApartment = quantityApartment;
//   }
//
//   getQuantityApartment() {
//     return {
//       floors: this.getQuantityFloor(),
//       apartments: this.quantityApartment,
//       allAparments: this.getQuantityFloor() * this.quantityApartment
//     }
//   }
// }
//
// class ShopingCenter extends Bylding {
//   constructor(name, quantityFloor, quantityMagazinOnFloor) {
//     super(name, quantityFloor);
//     this.quantityMagazinOnFloor = quantityMagazinOnFloor;
//   }
//
//   getQuantityMagazin() {
//     return {
//       floors: this.getQuantityFloor(),
//       magazines: this.quantityMagazinOnFloor,
//       allMagazines: this.getQuantityFloor() * this.quantityMagazinOnFloor
//     }
//   }
// }
// const liveHous = new LiveHous('ZhilStrou',7, 5);
// console.log(liveHous.getQuantityApartment());
//
// const shopingCenter = new ShopingCenter('ZhilStrou',21, 3);
// console.log(shopingCenter.getQuantityMagazin());

//3
// class Furniture {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//
//   getInformation() {
//
//     return `name is ${this.name}, price is ${this.price}`
//   }
// }
//
// class Home extends Furniture {
//   constructor(name, price, forHome) {
//     super(name, price);
//     this.forHome = forHome;
//   }
//
//   getInformation() {
//     return {
//       name: this.name,
//       price: this.price,
//       home: this.forHome
//     }
//   }
// }
//
// class Office extends Furniture {
//   constructor(name, price, forOffice) {
//     super(name, price );
//     this.forOffice = forOffice;
//   }
//
//   getInformation() {
//
//     return super.getInformation() + `office is ${this.forOffice}`
//   }
// }
//
// const furnitureForOffice = new Office ('table', '120', 'computer table');
// console.log(furnitureForOffice.getInformation());
//
//
// const furnitureForHome = new Home('sofa', '480', 'cover');
// console.log(furnitureForHome.getInformation());

//4

// class User {
//   constructor(name, dateOfRegistration) {
//     this.name = name;
//     this.registration = dateOfRegistration;
//   }
//   getInformationAboutUser() {
//    return `name is ${this.name}, day of registration ${this.registration}`
//   }
// }
// const user = new  User('User', '1 month');
// class Admin extends User{
//   constructor(name, superAdmin) {
//     super(name);
//     this.superAdmin = superAdmin;
//   }
//
//   getInformationAboutUser() {
//     return super.getInformationAboutUser() + `, is super Admin ${true}`
//   }
// }
//
// class Guest extends User {
//   constructor(name, validDate) {
//     super(name);
//     this.validate = validDate;
//   }
//
//   getInformationAboutUser() {
//     return super.getInformationAboutUser() + `, day of registration ${this.validate}`
//   }
// }
//
// const admin = new Admin('Admin', true);
// console.log(admin.getInformationAboutUser('december'));
//
// const guest = new Guest('user', '1 month');
// console.log(guest.getInformationAboutUser('ssscsswcwcw'));
