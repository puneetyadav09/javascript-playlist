const coding = [
    {
        languageName: "Javascript",
        fileType: "js"
    },
    {
        languageName: "Python",
        fileType: "py"
    },
    {
        languageName: "Java",
        fileType: "java"
    },
    {
        languageName: "HTML",
        fileType: "html"
    }
]


// For Each loop return nothing

// const values = coding.forEach((item) => {
//     return item;
// })
// console.log(values);



// filter method return array according to condition
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr = myNums.filter( (nums) => (nums > 5) );
// console.log(arr);


// const newNums = [];
// myNums.forEach((num) => {
//     if(num > 5) newNums.push(num);
// });
// console.log(newNums);



const books = [
    {title: "First", genre: "History", publish: 1992, edition: 2002},
    {title: "Second", genre: "Fiction", publish: 1998, edition: 2005},
    {title: "Third", genre: "Science", publish: 1994, edition: 2003},
    {title: "Fourth", genre: "Non-Fiction", publish: 1997, edition: 2008},
    {title: "Fifth", genre: "History", publish: 1991, edition: 2000},
    {title: "Sixth", genre: "Fiction", publish: 1995, edition: 2006},
    {title: "Seventh", genre: "Non-Fiction", publish: 1996, edition: 2010},
    {title: "Eight", genre: "History", publish: 1993, edition: 2008},
    {title: "Ninth", genre: "Non-Fiction", publish: 1997, edition: 2009},
    {title: "Tenth", genre: "Science", publish: 1990, edition: 2012},
];

// const userBooks = books.filter((bk) => bk["genre"] === "History");

const userBooks = books.filter((bk) => {return (bk["publish"] >= 1995 && bk["genre"] === "Fiction")});
console.log(userBooks);