// for of loop

const arr  = [1, 2, 3, 4, 5]
for (const val of arr) {
    // console.log(val);
}


const str = "PUNEET";
for (const ch of str) {
    // console.log(`Each character is ${ch}`);
}



// MAPS

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATE OF AMERICA");
map.set("FR", "FRANCE");
map.set("IN", "INDIA");

// console.log(map);
// for (const keys of map) {
//     console.log(keys);
// }
for (const [key, value] of map) {
    // console.log(`${key} has value ${value}`);
}


/*
Objects are not iterable using for of loop
*/