const y={
    name:"aasif",
    age:23,
    isAlive: true,
    from:"kashmir",
    Degree: "b.tech", //degree is key and b.tech is value
    hobbies:['cycling', 'gardning','eating', 'coding'], //array key value
        // can access it as y.age or age

    

    
    foods:{  // we can create abjs inside obj is known as nested obj
        sunday:"pizza",
        monday:'burger'
    },

    penColor:() =>{
        console.log("blue pen"); // PASSING FUNCTION AS A VALUE INSIDE OBJECT
        
    }

}; 

y.name="aqib"; // will change the name
    y.isHuman= true; // key value added in obj y
    // y='hello' this canot be done as y is const

const foodskey = "foods";
console.log(y["foods"]);
console.log(y.hobbies[1]); //accesing with dot & index

y.skills="coding";
console.log(y);
console.log(y["hobbies"]); //accessing with square braces


for (const key in y) {  //accessing abj values with FOR- IN LOOP
    console.log(key);  //can alse use y[key] can't use dot here
    
}



// FUNCTION VARIABLE CALL RETURN (OBJECT LITRAL)
//function that returns an object is known as factory function
function getVehicle (){ // function returns an obj
    return{
         type: 'car',
         wheels: 4
    }
}

const myvehicle = getVehicle() //function ko variable sai call kiya
 const myvehicle2 = getVehicle()
 myvehicle2.wheels=3;  // changed properties
console.log(myvehicle);
console.log(myvehicle2);

 console.log(typeof myvehicle); // iska type object ayai ga
 console.log(typeof getVehicle);//type function hai

 
 // object destructring ES6 Version

const myobj={ // want to store all values in diff variables
    name:"aasif",
    age:23,
    isAlive: true,
    from:"kashmir"}
// const myage = myobj.age;
// console.log(myage); //old way to change variable name
const {age:myage, isAlive:StillAlive }= myobj; // can change lot of values at a time
console.log(myage);
age=56;
console.log(myobj.age); // will show 23 as we didnt change myobj

// myobj.penColor=function(){
//     console.log("blue pen"); //yah key with value haiNOTHING IS PRINTED
    
// }
y.walk
console.log();

// console.log(myobj.penColor());  

