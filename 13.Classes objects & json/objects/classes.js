

//CLass, constructor ,NEW
//1. Constructor is a function which returns object
// 2. this, refers to different objects
//3.class is just naksha blueprint of house
//4.to call vehicle call we  use NEW kryword
//5.obj1 ka typeof hai object
// in js all classes are modified version of function
      //typeof vehicle is "function"
// nyai objects run kr rha factory method(function that returns onject)
// first letter of every class starts with capital alphabet



class Vehicle { //created class & passed constructor key which will help in making objects
   
        constructor(model, wheels) {
            // const this = {};
            this.model = model;
            this.wheels = wheels;
            // return this;
        }
        start (){ //creating function 
            console.log("vehicle staring to race");
            
        }
    }
    
    class Scooter extends Vehicle {
    
    }
    
    const obj1 = new Vehicle();
    const obj2 = new Vehicle();
    
    console.log(obj1);
    console.log(obj2);
    
    obj1.start(); // calling start function
    
  








    // this KEYWORD USE

const student ={
    name:'asif',
    marks:58,
    talk:function (){  //access above keys in this function this kryword
         console.log(`my name is ${this.name}  and marks are ${this.marks}`);
         
    }
}
student.talk();

const age =58;
// const message = "my age is "+ age;
const message = `my age is ${age}`        //defining variable inside string with${}
console.log(message);


///////////|||   CLASSES  |||\\\\\\\\\\\
// Javascript mai objects bnanai kai liyai classes ki zarootat nhi hoti
// but we still have classes




//  JSON  :: Key: value hota hai {}obj litral syntax      //

const jsonString = `{"asif":"rehman"}`
//convert above string to JS object
 const JsonObject = JSON.parse(jsonString);
 console.log(JsonObject);
 
 //convert JSon back to string

 const backtostring = JSON.stringify(JsonObject);
 console.log(jsonString);
 