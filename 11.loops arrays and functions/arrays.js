

// we can change or modify array but not array as whole 
// let mai define kiya tou change hoga


//array using litrals []
const words=['Xxxxxxzzzzz','india','hello', 'world', 'welcome', 23, 88, true ]
console.log(words,"print");

// using length property
console.log(words.length);



//searching array element using index no.
const names = ['adil', 'saqib', 'owais', 'yasir', null];
console.log(names [2]);
names [7]='faizan';  //ADDING NEW STUDENT FAIZAN TO ARRAY LIST
console.log(names);   // Middle indexes will be empty *2


//Adding an element using function/method

names.push ('noor'); //adds new element
names.pop(); // removes last element     //WE CAN CREATE STACK USING PUSH POP
console.log(names);

words.sort();   //sorts elements
console.log(words)
 const a= [12, 45,2,1,78,111]  // phalai 1 fir 12 ayai gaa like in dictionary(sorts numbers as string)
    a.sort();
    console.log(a);
    

const ispresent = words.includes('india')  //INclude method gives true or false
console.log(ispresent);


const frds=['zaid', 'yasir', 'amir', 'adil']
const abc = frds.indexOf('amir');    // indexof shows index of element
console.log(abc);

frds.splice(2,0 ,'zakir'); //it will start delete from 2 index onwards and put zakir in middle
console.log(frds);   //removes or replaces element here 1,2 element removed
  

   // FOR-EACH method 
     let z=[44,2,55,7,6]

    //  z.forEach((element)=>{  // function bnaya function ko pass kiya
    //     console.log("printing", element);  
    //  })

                             // OR
     let abcMyfunction = (element, index)=>{
             console.log("printing values",element, "index is", index);
             
     }
          z.forEach(abcMyfunction) // for each caa liya hai aur foe each mai jitnai b elements hai un ko abcmyfunction sai call kiya







