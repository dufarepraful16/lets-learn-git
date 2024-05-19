// const n = 5;

// // looping from i = 1 to 5
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// let sum = 0;
// const n = 100

// // looping from i = 1 to n
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     sum += i;  // sum = sum + i
// }

// console.log('sum:', sum);

// const number = parseInt(promt("Enter a number:"));

// for (let i=1; i<=10; i++){
//     const product = number * i;
//     console.log({product});
// }

// program to display numbers from 1 to 5
// initialize the variable
// let i = 1, n = 5;

// // while loop from i = 1 to 5
// while (i <= n) {
//     console.log(i);
//     i += 1;
// }

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);

