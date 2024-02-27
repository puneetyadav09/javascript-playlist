const userDetails = {
    username: "Puneet",
    isLoggedIn: true
};
const temperature = 41;

// if(userDetails.isLoggedIn){
//     console.log(userDetails.username);
// }

// if(temperature < 50){
//     console.log(`Temperature is less than 50`);
// } else {    
//     console.log(`Temperature is greater than 50`);
// }
// console.log("Executed");


const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);



const balance = 600;

// if(balance == 100) console.log("Balance is 100");

// if(balance < 100){
//     console.log("Balance less than 100");
// } else if(balance < 500){
//     console.log("Balance less than 500");
// } else if(balance < 750){
//     console.log("Balance less than 750");
// } else if(balance < 1000){
//     console.log("Balance less than 1000");
// }



const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

/*

&&   =>  All condition must be true for true result
||   =>  Any one condition must be true for true result
!    =>  Reverse the result i.e., convert true into false and vice-versa

*/
if(userLoggedIn && debitCard){
    console.log("User can buy things");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Logged In");
}