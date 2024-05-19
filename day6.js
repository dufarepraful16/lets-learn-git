console.log("Hello World");
console.log("Hello " + "World!!")
let a = 10;
let b = 20;

let c = a + b;
console.log(c);

console.log("Addition of " + a + " and " + b + " is " + c);

let str = "Sum of ";
str += a;
str += " and ";
str += b;
str += " is ";
str += c;
console.log(str);

a = 20;
a += 100;
console.log(a);

let x = 300;
x -= 100;
console.log(x);

x *= 10;
console.log(x);

console.log(x /= 10)
console.log(x);

// % => remainder

console.log(10%3);

let m = 10;
let n = 20;
if(m > n)
    console.log("hello");
else
    console.log("Woprld")

// < , >, <= , >=, ==, != !

let test = false; let test1 = false;
if(!test)
    console.log("test is true")
else 
    console.log("test is false")

if(!test && !test1)
    console.log("printed")

if(test || !test1)
    console.log("again")

// print greater of 3 nos
// a1,a2,a3

let a1= 200;
let a2 = 300;
let a3 = 250;

if(a1 > a2 && a1 > a3)
    console.log(a1);
else
    if(a2 > a1 && a2 > a3)
        console.log(a2);
    else
        console.log(a3);

// leap year => 
function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(1650);