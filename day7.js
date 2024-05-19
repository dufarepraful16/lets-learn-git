// 1. Javascript Array Off() Method

// creating an array named alphabets with elements A,B,C
let alphabets = Array.of('A','B',"C");
console.log(alphabets)

// creating an array 1 element
let numbers = Array.of(3);

console.log(numbers);

// creating an array with 3 string elements
let fruits = Array.of("Apple", "Banana", "Grapes");

console.log(fruits);

// 2.JavaScript Array concat()

var languages1 = ["JavaScript", "Python", "Java"];
var languages2 = ["C", "C++"];

var new_arr = languages1.concat(languages2);
console.log(new_arr); 

var new_arr1 = languages2.concat("Lua", languages1);
console.log(new_arr1);

var randomList = [1, 2, 3];
var randomNestedList = [
  [4, 5],
  [6, 7],
];
var combined = randomList.concat(randomNestedList);
console.log(combined);




// changing the value 1 to 0
randomList[0] = 0;
console.log(randomList);


// changes not reflected in concatenated array
console.log(combined);

// modifying nested list (adding 6 to first element)
randomNestedList[0].push(6);
console.log(randomNestedList);

// changes are reflected in concatenated array
// since it is a reference to the object
console.log(combined);


var a = ["sanjay", "aman", "rehman"];
var e = ["rahul", "karan"];
var c = ["neeraj", "pratik"]

var d = a.concat(e,c)

console.log(d)


// 3. JavaScript Array flat()

let number = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2 
let flattenArray = number.flat(2);
console.log(flattenArray);


let array_with_holes = [1, , 3];

// removes holes in the array
let flattedArray = array_with_holes.flat();

console.log(flattedArray);


// 4. JavaScript Array find()

var ages = [10, 23, 19, 20];

var b = ages.find(checkAdult);

console.log(b)

function checkAdult(age){
  return age>=18;
}

var ages = [10, 2, 19, 20];

var a = ages.findIndex(checkAdult);

console.log(a)

function checkAdult(age){
  return age>=18;
}


//5. Javascript Array join() 

var m = ["sanjay", "aman", "rehman"];
var n = ["rahul", "karan"];

var p = m.concat(n);

console.log(p);

var k = p.join("-");

console.log(k);

//6. Javascript Array sort() 

// custom sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

function len_compare(a, b){
    return a.length - b.length;
}

// sort according to string length
names.sort(len_compare);

console.log(names);



// numeric sorting



// define array
var priceList = [1000, 50, 2, 7, 14];

// ascending order
priceList.sort(function (a, b) {
  return a - b;
});

console.log("Ascending - " + priceList);

// descending order
priceList.sort((a, b) => b - a);

console.log("Descending - " + priceList);


//7. Javascript Array pop() 

var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];

var popped = languages.pop();

console.log(languages);
console.log(popped); 

// pop returns any type of object
var num = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(num.pop());
console.log(num); 

//8. Javascript Array push() 

var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.push("C++");
console.log(languages); 
console.log(count); 

var priceList = [12, 21, 35];

var count1 = priceList.push(44, 10, 1.6);
console.log(priceList); 
console.log(count1); 



//9. Javascript Array slice() 


let language = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_ar = language.slice();
console.log(new_ar);

// slicing from the third element
let new_ar1 = language.slice(2);
console.log(new_ar1); 

// slicing from the second element to fourth element
let new_ar2 = language.slice(1, 4);
console.log(new_ar2);


let human = {
  name: "David",
  age: 23,
};

let arr2 = [human, "Nepal", "Manager"];
let new_arr2 = arr2.slice();

// original object
console.log(arr2[0]); 

// making changes to the object in new array
new_arr2[0].name = "Levy";

// changes are reflected
console.log(arr2[0]); 


//10. Javascript Array splice() 

let lang = ["JavaScript", "Python", "Java", "Lua"];

// replacing "Java" & "Lua" with "C" & "C++"
let removed = lang.splice(2, 2, "C", "C++");
console.log(removed); 
console.log(lang); 

// adding elements without deleting existing elements
let removed1 = lang.splice(1, 0, "Java", "Lua");
console.log(removed1); 
console.log(lang);

// removing 3 elements
let removed2 = lang.splice(2, 3);
console.log(removed2); 
console.log(lang); 



let lan = ["JavaScript", "Python", "Java", "Lua"];

// does not removes, only appends to the end
let remove = lan.splice(5, 2, "C++");
console.log(remove); 
console.log(lan); 

// remove last element and add 3 more elements
let remove1 = lan.splice(-1, 1, "Swift", "Scala", "Go");
console.log(remove1); 
console.log(lan); 



let l = ["JavaScript", "Python", "Java", "Lua"];

// removes everything from start
let rem = l.splice(1);
console.log(rem); 
console.log(l); 

// remove none & add 3 more element
let rem1 = l.splice(1, -2, "Swift", "Scala", "Go");
console.log(rem1);
console.log(l); 

//11. Javascript Array shift() 

var cars = ["swift", "kia", "creta", "indica", "tiago"];

var shifted = cars.shift();

console.log(cars);
console.log(shifted); 

// shift returns any type of object
var numb = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(numb.shift());
console.log(numb); 


//12. Javascript Array unShift() 

var langua = ["JavaScript", "Python", "Java", "Lua"];

var count = langua.unshift("C++");
console.log(langua);
console.log(count); 

var priceList1 = [12, 21, 35];

var count1 = priceList1.unshift(44, 10, 1.6);
console.log(priceList1); 
console.log(count1); 





