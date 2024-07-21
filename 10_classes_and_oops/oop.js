const user = {
    username: "Puneet",
    loginCount: 8,
    isSignedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Is Signed in: ${this.isSignedIn}`);
    }
}


console.log(user.username);
console.log(user.getUserDetails());