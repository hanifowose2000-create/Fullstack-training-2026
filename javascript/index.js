// using switch statemwnt 

let day = "sunday";

if (day === "monday") {
    console.log("Today is Monday");
} else if (day === "Tuesday") {
    console.log("Today is Tuesday");
} else if (day === "Wednesday") {
    console.log("Today is Wednesday");
} else if (day === "Thursday") {
    console.log("Today is Thursday");
} else if (day === "Friday") {
    console.log("Today is Friday");
} else if (day === "Saturday") {
    console.log("Today is Saturday");
} else if (day === "Sunday") {
    console.log("Today is Sunday");
} else {
    console.log("Invalid day");
}

// scopes in Javascript

// 1. Global Scope - can be accessed globally(anywhere)
const year = 2000; // global scope, let, or const
const fullName = "John Doe"

function calculateAge () {

  // console.log(fullName)
  var year = 2022; // local scope, var
  // console.log(`My name is ${fullName}, and i was born at ${year}.`)
}

// calculateAge();

// console.log(fullName);


// arrays - square brackets [] , indexing starts from 0 , ordered list of values
const fruitFromMarket = ["mango", 'orange', 'guava', 'kiwi', 'tomato']
const leftOverFruits = ['banana', 'coconut', 'watermelon']
const fruitBasket = []; // strings 

leftOverFruits.pop();

fruitBasket.push(...fruitFromMarket, ...leftOverFruits);

// console.log(fruitBasket);
// console.log(fruitBasket.length);

// console.log(fruits[1] + " and " + fruits[2]);

// push() :- Add new item(s) to the end, 
// unshift() :- Add new Item to start, 
// pop() :- Removes item from the end, 
// shift() :- Removes item from start, 
// length :- get the count of the items in the array


// fruits.pop()

// console.log(fruits);
// console.log(`i ate ${fruits[0]} and ${fruits[1]} yesterday, and i have ${fruits.length} fruits in total`);





const tasks = ["bath", "eat", "sleep", "write codes", "hghghghg", "bjfbbnbvnbvnbv", "bnmbnmfff", "jbjdbdbbd", leftOverFruits, "jgkfhhghdjkg", "im here", "i'm bacxckkkkkk"];

const lastSixTasks = tasks.slice(-6); //last six items in the array
// console.log(lastSixTasks);
// console.log(tasks.splice(5));
// console.log(tasks.slice(-4));



const colors = ["blue", 'red', 'green', 'orange']; //4 items
//             [  0    ,  1   ,     2 ,     3   ] 3
//             [  color , color ,color , color   ] 3

// classic loop = identifier that travels {checks every item in the array}
for (let i = 0; i < colors.length; i++) {
  // console.log(`i am the number ${i} , and the fruit is ${colors[i]}`)
}

const scores = [12, 34, 45, 67, 87, 90, 97, 100, 43, 9, 6];


for (const score of scores) {
  // console.log(`your score is ${score}`);
}

for (const color of colors) {
  // console.log(`i am color ${color}`);
}

// for each
colors.forEach((er, i) => {
  // console.log(er, i)
})



const numbers = [12,34, 45, 67, 87, 90, 97, 100, 43, 9, 6, 20, 20, 43, 43, -23, -40];

const doubledNumbers = numbers.map(n => n * 0);
const evenNumbers = numbers.filter(n => n % 2 ===0); // even numbers divisible by 2
const oddNumbers = numbers.filter(n => n % 2 ===1); // odd numbers
const totalNumbers = numbers.reduce((n, sum ) => n + sum, 0);
// console.log(doubledNumbers);
// console.log(`from ${numbers}, only ${evenNumbers} are even.`);
// console.log(`from ${numbers}, only ${oddNumbers} are odd.`);
console.log(totalNumbers);