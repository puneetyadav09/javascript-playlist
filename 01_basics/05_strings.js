const greet = "Hello";
const name = " Puneet";

// console.log(greet + name);

// console.log(`${greet}, My name is${name}.`);

const getName = new String("Puneet");
// console.log(getName.__proto__)
// console.log(getName.length)
// console.log(getName.toLowerCase())
// console.log(getName.toUpperCase())

// console.log(getName.charAt(3));
// console.log(getName.indexOf('t'));

const newString = getName.substring(1, 3);   ///Don't use -ve values
// console.log(newString);

const newString2 = getName.slice(-5, 1);   ///Can use -ve values
// console.log(newString2);

