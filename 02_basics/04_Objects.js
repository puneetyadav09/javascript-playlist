// const tinderObject = new Object();       //// SingleTon Object
const tinderObject = {};                  /////Non SingleTon Object

tinderObject.id = "123";
tinderObject.name = "Puneet";
tinderObject.age = 20;

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

// if {} is not written in below line then we can understand that all objects are merge and added in first object then clone to obj5
const obj5 = Object.assign({}, obj1, obj2, obj3);   //// {} act as target and obj1, obj2, obj3 act as source and all values store in {}

const obj6 = {...obj1, ...obj2, ...obj3};

// console.log(obj4);
// console.log(Object.keys(obj4));
// console.log(obj5);
// console.log(obj6);


const obj7 = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
    {
        id: 4,
        email: "user4@gmail.com"
    }
]

// console.log(obj7);
// console.log(obj7[0]);
// console.log(obj7[3].id);

// console.log(Object.keys(obj7[0]));
// console.log(Object.values(obj7[0]));
// console.log(Object.entries(obj7));
// console.log(Object.entries(obj7[0]));


// console.log(obj7.hasOwnProperty('2'));
// console.log(obj7[0].hasOwnProperty('name'));


const course = {
    courseName: "Javascript Tutorials",
    price: "999",
    courseCreatedBy: "Puneet"
}

const {courseCreatedBy: instructor} = course;   //// courseCreatedBy is keys from course and instructor is any variable name

// console.log(courseCreatedBy);
console.log(instructor);