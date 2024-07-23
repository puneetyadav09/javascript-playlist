// let myName = "Puneet     "
// let mychannel = "puneetyadav09     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.puneet = function(){
    console.log(`Puneet is present in all objects`);
}

Array.prototype.heyPuneet = function(){
    console.log(`Puneet says hello`);
}

// heroPower.puneet()
// myHeros.puneet()
// myHeros.heyPuneet
// heroPower.heyPuneet()

// inheritance

const User = {
    name: "puneet",
    email: "puneet@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "puneetyadav09     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Puneet".trueLength()
"puneetyadav09".trueLength()