const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);
// console.log(`myTotal: ${myTotal}`);


// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 6);
// console.log(`myTotal: ${myTotal}`);


const shoppingCart = [
    {
        courseName: "html course",
        price: 999
    },
    {
        courseName: "css course",
        price: 1499
    },
    {
        courseName: "js course",
        price: 2499
    },
    {
        courseName: "python course",
        price: 1999
    },
    {
        courseName: "java course",
        price: 3999
    }
]

const totalPrice = shoppingCart.reduce((acc, total) => {
    return acc + total["price"];
}, 0);

console.log(totalPrice);