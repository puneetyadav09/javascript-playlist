const userEmail = "abc@gmail.com"
// const userEmail = ""
// const userEmail = []

if(userEmail) {
    console.log("Got user mail");
} else {
    console.log("Don't got user mail")
}

// falsy values
/*
false
0   => In number datatypes
-0
0n  => this is in BigInt
""
null
undefined
NaN
*/



// truthy values
/*
'0'
'false'
" "
[]
{}
function(){}
*/


const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
// }




// Nullish Coalescing Operator (??): null defined
let val;
// val = 10 ?? 20;
// val = null ?? 10;
// val = undefined ?? 10;
// val = null ?? 30 ?? 40;
val = null ?? undefined;


console.log(val);



// Terniary operator
// condition ? true : false

const price = 100;
price < 200 ? console.log("Affordable") : console.log("Not Affordable");