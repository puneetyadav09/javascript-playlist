const number = [1,2,3,4,5,6,7,8,9,10];
// const newNumber = number.map((num) => num + 10);

const newNumber = number
                    .map((num) => num * 10)
                    .map((num) => num +1)
                    .filter((num) => num%3);


console.log(newNumber);