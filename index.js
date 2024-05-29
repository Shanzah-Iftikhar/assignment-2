"use strict";
//object , array and function
Object.defineProperty(exports, "__esModule", { value: true });
const people = {
    friends: []
};
const friend1 = {
    firstName: "sheeza",
    lastName: "saleem",
    city: "karachi",
    age: 18
};
const friend2 = {
    firstName: "unaiza",
    lastName: "bilal",
    city: "lahore",
    age: 19
};
const friend3 = {
    firstName: "nabiha",
    lastName: "zaheer",
    city: "karachi",
    age: 18
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
//assignment 2 =maniuplating an Array OR rearranging an Array
const scrambledArray = ["student", "of", true, 903, "an", "a", "GIAIC", "S"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
const sentence = scrambledArray.join("");
console.log(sentence);
let inventory = [];
let product1 = {
    name: "refrigerator",
    price: 12000,
    durability: "2Years"
};
let product2 = {
    name: "airConditioner",
    price: 124000,
    durability: "5Years"
};
let product3 = {
    name: "oven",
    price: 12900,
    durability: "4Years"
};
inventory.push(product1, product2, product3);
console.log(inventory[1].durability);
const student1 = {
    name: "munazza",
    senior: true,
    completedAssignment: false
};
const student2 = {
    name: "irfa",
    senior: false,
    completedAssignment: false
};
const student3 = {
    name: "mehak",
    senior: true,
    completedAssignment: true
};
const students = [
    student1, student2, student3
];
console.log(students);
