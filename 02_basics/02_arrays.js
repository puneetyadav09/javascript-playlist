const marvel_heros = ['Thor', 'Ironman', "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const myArr = marvel_heros.concat(dc_heros);
// console.log(myArr);



// Spread Operator
const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);



const newArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 3, 7]]];
const anotherArr = newArr.flat(Infinity);
// console.log(anotherArr);



// console.log(Array.isArray("Puneet"));
// console.log(Array.from("Puneet"));
// console.log(Array.from({name: "Puneet"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));