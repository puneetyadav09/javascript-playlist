// Primitive Datatypes

/*
1. String
2. Number
3. BigInt
4. Null
5. Boolean
6. Undefined
7. Symbol
*/

const bigNumber = 282934182371823784912123n;
const max = Number.MAX_SAFE_INTEGER;
const min = Number.MIN_SAFE_INTEGER;

// console.log(max, min);


// Reference type variable (Non-Primitive Type)
// Arrays, Objects, Functions

const arr = ["Puneet", "Tushar", "Yash"];
const obj1 = {
    name: "Puneet",
    age: 20,
    state: "Haryana"
};

const fun1 = function(){
    console.log("Hello world");
};

// console.log(arr);
// console.log(obj1);
// console.log(fun1());


// ***************************Memory*************************** //
/*
Stack => Primitive datatypes
Heap => Non-Primitive datatypes
*/

let name = "Puneet";
let anotherName = name;
anotherName = "Tushar";

// console.log(anotherName);
// console.log(name);

let user1 = {
    email: "abc@gmail.com",
    upi: "user1@ybl;"
}

let user2 = user1;

user2.email = "abcdef"

console.log(user1);
console.log(user2);