// for each loop
const languages = ["rb", "py", "js", "html" ,"css"]

// languages.forEach(function (items) {
//     console.log(items);
// });

// languages.forEach((items) => {
//     console.log(items);
// });

// function printMe(items){
//     console.log(items);
// }
// languages.forEach(printMe);


/*
forEach loop carries
1. item on that index
2. index number
3. complete array
*/
// languages.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });


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
coding.forEach((item) => {
    console.log(item.languageName);
})