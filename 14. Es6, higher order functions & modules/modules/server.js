import {  addition } from"./utility.js";
import random_name from"./utility.js";
import { subtraction, multiplication } from "./utility.js";

// import random_name from "./utility.js";

const a = 15;
const b = 5;

const result =addition(a, b);
const sub = subtraction(a,b);
const mul = multiplication(a,b);
const defaultresult = random_name(a,b);


console.log(result);
console.log(sub);
console.log(mul);
console.log(defaultresult);


