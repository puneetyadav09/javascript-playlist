function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // call is used to executing and getting username from above function and 
    // this in call is used to sharing current execution context so that it return in execution context of this function
    // not in previous
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const puneet = new createUser("puneet", "puneet@gmail.com", "123")
console.log(puneet);