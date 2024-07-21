const user = {
    username: "Puneet",
    loginCount: 8,
    isSignedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Is Signed in: ${this.isSignedIn}`);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this
}

const userOne = new User("Puneet", 12, true);
const userTwo = new User("Tushar", 11, false);

console.log(userOne);
console.log(userTwo);