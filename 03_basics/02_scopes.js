var c = 300         ////global scope
let a = 100         ////global scope

if(true){
    let a = 10;      /////block scope
    const b = 20;
    c = 30;     ////block scope
    // console.log(`Inner a: ${a}`);
    // console.log(`Inner c: ${c}`);
}


// console.log(`Outer a: ${a}`);
// console.log(b);
// console.log(`Outer c: ${c}`);


function one(){
    const username = "Puneet";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);

    two();
}

// one();


function addOne(num){
    return num + 1
}

addOne(5);     ////also can access before definition


//// also known as expression
const addTwo = function(val){
    return val + 2
}

addTwo(3);    /////can't access before definition