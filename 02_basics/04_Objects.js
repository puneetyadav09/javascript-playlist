// const tinderObject = new Object();       //// SingleTon Object
// const tinderObject = {};                  /////Non SingleTon Object

// tinderObject.id = "123";
// tinderObject.name = "Puneet";
// tinderObject.age = 20;

const details = {
    id: 1234,
    fullName: {
        userFullName: {
            firstName: "Puneet",
            lastName: "Yadav"
        }
    }
}

// console.log(details.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

const obj4 = {obj1, obj2, obj3};

const obj5 = Object.assign({}, obj1, obj2, obj3);   //// {} act as target and obj1, obj2, obj3 act as source and all values store in {}

const obj6 = {...obj1, ...obj2, ...obj3};

// console.log(obj4);
// console.log(obj5);
// console.log(obj6);


