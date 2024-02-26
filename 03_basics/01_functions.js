function myName(){
    console.log("P");
    console.log("u");
    console.log("n");
    console.log("e");
    console.log("e");
    console.log("t");
}

// myName();

// function addNum(a, b){
//     console.log(a + b);
// }
function addNum(a, b){
    return (a + b);
}

const result = addNum(3, 5);
// console.log(`Result: ${result}`);

function userLogin(username = "Puneet"){
    return `${username} is Logged in`;
}

// console.log(userLogin("Tushar"));
// console.log(userLogin());



function calculateCartPrice(...num){       
    //// ... is rest operator used to to get any number of values in single parameter
    return num;
}

function calculateCartPrice1(val1, val2, ...num){   
    //// rest operator must be at last and get have last values i.e., in this example it get [600, 800]
    return {val1, val2, num};
}

// console.log(calculateCartPrice(200, 400, 600));
// console.log(calculateCartPrice1(200, 400, 600, 800));


const user = {
    username: "Puneet",
    age: 20
};

function handleObject(anyObject){
    return `Username is ${anyObject.username} and age is ${anyObject.age}`;
};

// console.log(handleObject(user));


// Direct pass
// console.log(handleObject({
//     username: "Tushar",
//     age: 23
// }));


const newArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(newArray));