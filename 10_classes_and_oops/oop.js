const user = {
    username: "Puneet",
    loginCount: 8,
    isSignedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}, Login Count: ${loginCount}, Is Signed in: ${isSignedIn}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());