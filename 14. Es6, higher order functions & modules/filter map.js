const a = [1, 2, 3, 4, 5, 6];
//type a. you wii get all methods (built-in)

function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}



// const b = a.filter((element,index,arr) =>{ //filter function gives us all 3 values
//     console.log(element,index,arr);
//     return true
    
// });


// const b=a.filter(isEven);

// console.log(b);
// console.log(a);

function square(num) {
    return num*num;
}

function negative(num) {
    return -num;
}

// const b = a.map(negative); //MAP modify krta elements ko

const b = a.map((x) => 'my num is '+x); //modify kr kai next variable mai daldo

const students = [
    {
        name: "Anuj",
        marks: 12
    },  {
        name: "Shivam",
        marks: 76
    },  {
        name: "Sanchita",
        marks: 67
    },  {
        name: "Raj",
        marks: 87
    }
]

const grades = students.map((element) => {
    if(element.marks < 50) {
        element.isPassed = `you are ${element.name}`; //(template litrals are used ``------isPassed is aslo a key like name,marks
    } else {
        element.isPassed = true;
    }
    return element;
})

const found = students.filter((element) => { //find use kr kai 1 hee element milta
    return element.marks > 50;
})

console.log(grades);
