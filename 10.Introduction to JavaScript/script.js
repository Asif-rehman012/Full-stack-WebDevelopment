

let x="777";
console.log(x);

console.log(typeof x);

//type conversion 

var a= '234';
const b = Number(a);
console.log(typeof b);



var h='abc';
const u=Number(h);
console.log(u); //after parsing it recognizes it and prints NAN not a number

let f=560;
f = String (f);
console.log(typeof f); //converted type number into String

let formsubmitted=true;
console.log(typeof formsubmitted);
formsubmitted = Number(formsubmitted);
console.log(typeof formsubmitted);
console.log(formsubmitted);   // true is converted into 1 and false into 0

var k=887;
k= Boolean(k);
console.log(k); //converting any number into boolean gives TRUE but converting 0 gives False

var  eng, math, urdu, sum;
eng=68;
math=88;
urdu=87;
sum = eng+math+urdu;
console.log("TOTAL MARKS I GOT OUT OF 300/ " + sum); //arithmetic operators ++, =-*/

//JS COMPARISION OPERATORS

let m=55;
let n = 55;
let o='55'
console.log(m==n); //equal to
console.log(m!==n); //not equal to
console.log(m>n); //greater than
console.log(m<n); // less than
console.log(m>=n); // greater than equal to

console.log(m===o); //strict equal to
console.log(m!==o); // true if operands equal but of diff type STRICT NOT EQUAL TO

// IF-ELSE ELSE-IF

if(a=b){
    
}

















