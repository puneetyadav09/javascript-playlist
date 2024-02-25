// singleton
// Object.create

const mySym = Symbol("Key1");

// Object literals
const userDetails = {
    name: "Puneet",
    age: 20,
    location: "Haryana",
    email: "abc@gmail.com",
    [mySym]: "Key2"         //// For symbol we have to use [] brackets
};

// console.log(userDetails.email);
// console.log(userDetails["email"]);

// console.log(userDetails[mySym]);
// console.log(typeof userDetails[mySym]);

// userDetails.email = "puneet@gmail.com";
// Object.freeze(userDetails.age);               //// Can freeze complete object or only one instance of object
// userDetails.email = "puneet@microsoft.com";
// Object.freeze(userDetails);
// userDetails.email = "puneet@facebook.com";
// console.log(userDetails);


userDetails.greeting = function(){
    console.log("Hello User");
}

userDetails.greetingTwo = function(){
    console.log(`Hello User, My Name is ${this.name}`);  /// this access all keys and values from same object
}

console.log(userDetails.greeting);
console.log(userDetails.greeting());
console.log(userDetails.greetingTwo());