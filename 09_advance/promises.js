// First Promise
const promiseOne = new Promise(function(resolve, reject){
    // DO async task
    // DB calls, cryptography, network
    setTimeout(() => {
        resolve();
        console.log("Async task is completed");
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed");
});



// Second Promise
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async 2 completed");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 consumed");
})



// Third Promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Puneet", email: "puneet@gmail.com"});
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})




// Fourth Promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Puneet", password: "Puneet@123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})

promiseFour.then(function(cred){
    console.log(cred);
    return cred.username;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log("The promise is eiher resolved or rejected"));




// Fifth promise
const promiseFifth = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Puneet", password: "puneet@123"});
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFifth
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFive();

// async function getData(){
//     const response = await fetch("https://api.github.com/users/puneetyadav09");
//     const data = await response.json();   /// It takes times that's why we use await in formatting into json data
//     console.log(typeof data);
//     console.log(data);
// }

// getData()


fetch("https://api.github.com/users/puneetyadav09")
.then((response) => {
    return response.json();
}).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log("Error: ", error);
})