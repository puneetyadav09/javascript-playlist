// for loop
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < newArray.length; i++) {
//     if(newArray[i] == 6) break;
//     console.log(newArray[i]);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     console.log("");
//     for (let j = 0; j < 5; j++) {
//         console.log(`Inner Loop value: ${j}`);   
//     }
//     console.log("");
// }


let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}



// Break and Continue

// for (let i = 0; i < 10; i++) {
//     if(i == 8){
//         break;
//     }
//     console.log(i);
// }

for (let i = 0; i < 10; i++) {
    if(i == 5){
        continue;
    }
    console.log(i);
}