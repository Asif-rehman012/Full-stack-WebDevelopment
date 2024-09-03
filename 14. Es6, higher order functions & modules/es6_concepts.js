// destructuring

const obj = {
    name: "Asif",
    age: 23
}

const {name, age} = obj;

// console.log(name, age);


// default parameter

// function greet(name = "Lerner") {
//     console.log("hello " + name);
// }

// greet()
// greet("Asif") // if we will not pass name here it will show undefined


// spread operator

function greet(...a) {
    console.log('hello', a[0]);
}

greet("Asif", "Sahil", 12);

const a = [1, 2, 3];

const b = [4, ...a, 5, 6] //...a (SPREAD OPERATOR)use nhi karai gai fir same values print hogai but nested array bnai ga ;; YAH FOR LOOP SAI B HO SAKHTA

console.log(b);

const animal = {  //OBJ Animal
    name: 'Simba',
    age: 23
}

const fullInformation = {  //spread operator sai full info milai ge
    ...animal,
    address: 'pahaad',
    legs: 4
}

console.log(fullInformation);