const accountId = 123456
let accountEmail = "abc123@gmail.com"
var accountPassword = "abc@123"
accountCity = "Jaipur"  // Possiblity of creating variable without var, let, const but not a good practice
let accountState;    // By default variable is of undefined type

// accountId = 10        ///Changing const value is not allowed in Javascript

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState])

accountEmail = "abc@gmail.com"
accountPassword = "123@abc"
accountCity = "Rewari"
/*
Prefer not to use var
because of issue of block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])