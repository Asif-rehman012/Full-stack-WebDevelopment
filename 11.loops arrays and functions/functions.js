function greetings (name){
        console.log("Hi", name);
        console.log("aslamu alikum", name);
        console.log("namastai");        
}


greetings("asif");
greetings("adil");

// TO DO ADDITION
addition(10,15);
function addition(a,b){
    console.log("The sum of 2 numbers is :" , a+b);
    
}

// RETURN
// let result = subtraction (10,7); // 1.function call ki 3. result value store huva result variable mai
// console.log("the result is =", result);  // 4. result value print huva

// function subtraction (a,b){
//              return(a-b); // 2. result huva

//              console.log("the result is =", result); // dull huva  after return code is unreachable REturn end of function 
//             }


//Function expression

// const mysubFunction = function (a,b){ // mysubfunction os variable type function (variable bnaya uss kai andr function bnaya)
// console.log("the result is =");  //  function kai andr kaam kiya

//              return(a-b); // 
//                  }
//    console.log(mysubFunction(50,35)); // variable ko yha pai use kr diya
            // yha pai hmm nai variable ko access kiya end pai ...UPER STARTING MAI USE NHI HOGA


// ARROW FUNCTION
const mysubFunction =  (a,b)=>{ // SAME AS ABOVE BSS FUNCTION HTAI GA ARROW AYAI GA
    console.log("the result is =");  
    
                 return(a-b); // 
                     }
       console.log(mysubFunction(50,35));
   
            


