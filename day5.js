const arr = [5, 1, 3, 2, 6]

// function double(x){
//     return x*2;
// }
// const output = arr.map(double);
// console.log(output);

// function triple(x){
//     return x*3;
// }
// const result = arr.map(triple);
// console.log(result);

// function binary(x){
//     return x.toString(2);
// }
// const Ans = arr.map(binary);
// console.log(Ans);

// const output = arr.reduce(function(max, curr){
//     if(curr>max){
//         max = curr;
//     }
//     return max;
// }, 0);
// console.log(output)

const user = [
    {firstName :"Akshay", lastName : "Saini", age : 26},
    {firstName :"Donald", lastName : "Trump", age : 75},
    {firstName :"Elon", lastName : "Musk", age : 50},
    {firstName : "Deepika", lastName : "Padukon", age : 26}
]

// list of full name 

let Result = user.map((x) => x.firstName +" " + x.lastName);
console.log(Result)

// same age number

let ans = user.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } 
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(ans)

// firstName of all people whose age is les than 30

let output = user.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output)
