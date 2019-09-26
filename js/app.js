let string = "some test string";
let value;
//1
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
let newString = "";

for (let index = 0; index < string.length; index++) {
    const someStrinng = string[index];

    if (someStrinng !== 10) {
        newString += someStrinng;
    }
}
console.log(newString)
//8
