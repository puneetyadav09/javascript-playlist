const user = {
    username: "Puneet",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Tushar";
// user.welcomeMessage();


// console.log(this);


function thisDetails(){
    let name = "Puneet";
    console.log(this);
    console.log(this.performance);
    console.log(this.name);
}

// thisDetails();



const arrowFunction = () => {
    let name = "Puneet";
    console.log(this);
}
// arrowFunction();


//// Implicit return
/* No need to write return keyword if you have to return in one line then write it in
same line with bracket or without bracket.*/

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (num1 + num2);
// For returning object paranthesis are compulsory
const returnObject = () => ({username: "Puneet"});

console.log(addTwo(3, 5));
console.log(returnObject());