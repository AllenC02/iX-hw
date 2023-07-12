
//prints output to console
console.log('We are connected!');

//variables in JS

// we pretty ignore var
//var

//let
//let can resassigned
let a = 10;
console.log(a);
a='hello there';
console.log(a);

//const
//can't be reassigned
const myName = 'Allen';
console.log(myName);
//uncaught typeError
//myName = 'michelle';
//console.log(myName);

//Data Types in JS

//Primitives
// Stored in a location on the stack

// string

//check the type
//console.log(typeof myName);

//number
//boolean
//null (intentionally left empty)
//undefined (variable unassigned)

//Reference
//Dynamically allocated memory
//a Pointer to a location in memory

//arrays
//objects
//literals
//anything else (pretty much)

//string methods and concatenations

const firstName = 'Allen';
const lastName = 'Chou';
const age = 20;
const greeting = 'Hello my name is Allen';
const tags = 'software, programming, engineering';

let fullName = firstName + ' ' + lastName;
console.log(fullName);
let myGreeting = `${greeting}, but my full 
    name is: ${fullName} 
    and I am ${age} years old`;

console.log(myGreeting);

//Appending
let val;
console.log(val);
val = 'John ';
console.log(val);
//val + val + 'Doe';
val += 'Doe';
console.log(val);

//ToUpperCase
let city = 'johannesburg';
console.log(city);
city = city.toUpperCase();
console.log(city);

//toLowerCase
let town = 'BENONI';
console.log(town);
town = town.toLowerCase();
console.log(town);

//character at an index in a String
let char = town.charAt(3);
console.log(char)

//Indexes in JS start at 0
//Index at 2 => 3rd character
let arr = ['one', 'two', 'three'];
console.log(arr[0]);

let longWord = 'antidisestablishmentariaasnism';
//get substring from longer string
console.log(longWord.substring(0,5));

//Slice a string
console.log(longWord.slice(0,5));

//includes()
//returns a boolean
//we can use this as a check statement (if statement)
console.log(longWord.includes('a'));

//template literals

const name = 'Cameron';
const surname = 'Kirkpatrick';
const howOld = 29;

// let html;

// html = `
//     <ul>
//         <li>First Name: ${name}<li>
//         <li>Last Name: ${surname}</li>
//         <li>I am ${howOld} years old</li>
//     </ul>
// `;

// document.body.innerHTML = html;

//Math Object
//It has methods attached to it
//Eulors Number
console.log(Math.E);

//comparative operators

//equal to
//greater than
//greater than and equal to
//less than

//Logical Operators
//If else 

//truthy and falsey checks

//null is a falsey value
let item = null;
//0 is a falsey value
item = 0;
//values larger than 0 are truthy
item = 10;
//values smaller then 0 are truthy

if (item) {
    console.log('This must have been true');
} else {
    console.log('This must have been false');
}

if(item > 5) {
    console.log('Something');
} else {
    console.log('Something else');
}

if(item > 5 || item < 5) {
    console.log('ello there');
} else {
    console.log('goodbye there');
}

let newItem = 'hello';

// ==
// check for value equality
// ===
// check for value and type equality

if (item < 5 && newItem === 'hello') {
    //execute this
    console.log('ello there');
} else {
    //else execute this
    console.log('goodbye there');
}

//Terniary Operator
//in line if statement

let number = 90;
console.log(number === 100 ? 'Yes it is!' : "No it's not");

let color = 'blue';

switch(color) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'blue':
        console.log('Color is Blue');
        break;
    case 'yellow':
        console.log('Color has Yellow');
        break;
    default:
        console.log('Color has no match');
        break;
}

//Arrays

let names = ['cam', 'sean', 'mia', 'jenny', 'john'];
console.log(names[0]);
console.log(names[1]);

// add to the array
names.push('james');
console.log(names);

//pop items off the array
names.pop('james');
console.log(names);


//higher order functions

//filter
let newArr1 = names.forEach((name) => {
    console.log(`The name is: ${name}`);
});

// filter
let newArr2 = names.filter((x) => {
    return x !== 'cam';
});
console.log(newArr2);

let newArr3 = names.filter((x) => x !== 'cam');
console.log(newArr3);

let newArr4 = names.filter((x) => x === 'cam');
console.log(newArr4);

let nameFound = names.find((x) => x == 'cam');
console.log(nameFound);

let indexFound = names.findIndex((x) => x == 'cam');
console.log(indexFound);
console.log(names[indexFound]);

// Objects

let person = {
    name: 'Cam',
    surname: 'Kirkpatrick',
    age: 29,
    phoneType: 'Samsung',
    getPhoneType: function () {
        return this.phoneType;
    }
};

//get all the keys for this object
console.log(Object.keys(person));
const keys = Object.keys(person);

console.log(person);
console.log(person['name']);
console.log(person['surname']);
console.log(person.getPhoneType());

// combine a few things here
// arrays, objects & higher order functions

let randomObjectArray = [
    {
        name: 'Cam',
        surname: 'Kirkpatrick',
        goalsScored: 5,
    },
    {
        name: 'Michelle',
        surname: 'Visser',
        goalsScored: 9,
    },
    {
        name: 'Joe',
        surname: 'Doe',
        goalsScored: 10,
    },
];

console.log(randomObjectArray);

let newRandomArray = randomObjectArray.map((x) =>{
    return {
        name: x.name,
        surname: x.surname,
        goalsScored: x.goalsScored + 1,
    };
});

console.log(newRandomArray);

// Looping

//For loop

let distance = 10;
for (let i = 0; i < distance; i++ ) {
    //execute inside here
    console.log('Our index value is: ' + i);
}

//sheep example
for (let i = 1; i < 6; i++) {
    console.log(`Sheep number: ${i}`);
}

// while loop

let newVal = 0;
while (newVal < 10) {
    console.log('Hey I am inside a while loop' + newVal);
    newVal += 1;
}

//Functions

function greetMe(name) {
    console.log(`Hello there ${name}`);
}

greetMe('Cameron');


// rule of thumb
// you should accept a max of 3 function parameters
// else rather accept an single entity

function addNumbers(num1, num2) {

}

function addFiveNumbers(num1, num2, num3, num4, num5) {

}

// let nums = {
//     num1: 0,
//     num2: 0,
//     num3: 0,
//     num4: 0,
//     num5: 0,
// };



function addFiveNumbers(nums) {
    let total = nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[4];
    console.log('Total is: ' + total);
}

addFiveNumbers([2,5,8,23,78]);

function getSlices(breadName) {
    if(breadName == '') {
        console.log('Whoops, no bread name given');
        return;
    }

    switch(breadName) {
        case 'Albony':
            console.log(`${breadName} sells loags with 30 slices`);
            break;
        case 'Sasko':
            console.log('s sells loags with 30 slices');
            break;
        case 'Woolies':
            console.log('w sells loags with 30 slices');
            break;
        default:
            console.log('No bread company');
            break;
    }
}

getSlices();
getSlices('')
getSlices('Albony');

let todaysDate = new Date();
console.log(todaysDate);

let day =todaysDate.getDate();
console.log(day);

//getMonth return the month but an index behind
let month = todaysDate.getMonth();
console.log(month + 1);

let year = todaysDate.getFullYear();
console.log(year);

console.log(`${day}/${month}/${year}`);