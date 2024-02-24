const myDate = new Date();
// console.log(`toString => ${myDate.toString()}`);
// console.log(`toDateString => ${myDate.toDateString()}`);
// console.log(`toISOString => ${myDate.toISOString()}`);
// console.log(`toJSON => ${myDate.toJSON()}`);
// console.log(`toLocaleDateString => ${myDate.toLocaleDateString()}`);
// console.log(`toLocaleString => ${myDate.toLocaleString()}`);
// console.log(`toTimeString => ${myDate.toTimeString()}`);
// console.log(`toUTCString => ${myDate.toUTCString()}`);


// console.log(typeof myDate);

// console.log(myDate.getDate());
// console.log(myDate.getDay());


// const createdDate = new Date(2024, 2, 9);   // Months numbering Start From 0
// const createdDate = new Date(2024, 2, 9, 0, 9);
const createdDate = new Date("03-09-2024");
// console.log(createdDate.toLocaleString());

const currentDate = Date.now();
// console.log(currentDate);

const newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);


console.log(newDate.toLocaleString('default', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}));