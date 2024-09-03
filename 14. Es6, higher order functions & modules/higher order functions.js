const a = [1, 2, 3, 4, 5, 6,7,8];


//filter function(EK FUNCTION DUSRAI FUNCTION KO AS A PARAMETER LAITA AUR RETURN KRTA)
function filterNumbers(conditionFunction) { //filternumber is higher order function
    const b = []; //conditionfunction is just variable name
    for(let i = 0; i<a.length; i++) {
        if(conditionFunction(a[i], i, a)) { // logic for checking even (number/index value/array)
            b.push(a[i]);
        }
    }
    return b;
}





function isEven(num) { // condition to check even nos
    return num % 2 == 0;
}

function isOdd(num, index, arr) {
    return num % 2 != 0;
}


// const evenNumbers = filterNumbers((num) => {
//     return num % 3 == 0; //woh element joi 3 kai multiply ho filter karo
// });

const evenNumbers = filterNumbers(isOdd);

console.log(evenNumbers);