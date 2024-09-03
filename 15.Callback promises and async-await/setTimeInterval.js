const a = 23;

const b = 12;

//sync mtlb rastai mai rasta ... yah heavy work...line by line code is executed::: heavy loop takes time to load
// console.log('ordering burger');
// for(let i = 0; i<5000000000; i++) {
//     let n = i*7876878;
// }
// console.log('burger eaten');

// const d = 12;
// function greet(obj) {
//     console.log('Hello', obj.name);
// }
    
// console.log('before greet');
// setTimeout (greet,3000) // yah function 3 sec baad execute hoga (USED TO SET DELAY IN BUTTON OR LINE)
//         //isko hmm nai time diya mtlb async mood bn gya iss kai baad walai lines jldi execute hogi


// console.log("execute first");

// const greetTimeoutId = setTimeout(() => {
//     greet({
//         name: 'Asif'
//     })
// }, 2000)   // will execute after 2 sec
// console.log(greetTimeoutId);


// const goodNightTimeoutId = setTimeout(() => {
//     console.log('Good night');
// }, 4000)    // will execute after 4 sec


// clearTimeout(greetTimeoutId)

// console.log('this is written after greet');

// greet();





////////// setInterval // FUNCTION BAR BAR CALL HOGA
const intervalid = setInterval(increaseCount, 1000)
let count=0;
function increaseCount(){
       count++
       console.log(count);
          const date = new Date ().toTimeString();//date class with time string
          console.log(date);
          
       if (count ==5){
        clearInterval(intervalid)  //5 kai baad clear hogA
}



// setInterval(increaseCount, 2000) // it will keep increments after 2sec(THIS IS PASSING THE FUNCTION)
//setintervall call krta hai ----incrementCount mtlb pass krna function


}