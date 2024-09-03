// 2015 sai phalai hmm call backs use krtai thai instead of promises

// const orderPizza = (myFunction) =>{ //callback is parameter (pass kiya) fun name
//    setTimeout(() =>{
//        const pizza='🍕';
//        myFunction(pizza);// iss function mai data pass kiya  jata pass kiya
//        //return pizza
//    },2000)

// }

// orderPizza((pizza) => {
//     console.log('here is your', pizza);
    
// });


///////

function orderPizza (myFunction) {
    getCheese((cheese) => { //known as CALLBACK HELL ek function kai andr dusra callback funtion ki tarah pass ho rha
        makeDough(cheese, (dough) => {
            bakePizza(dough, (pizza) => {
                myFunction(pizza);//to avoid this we use promises(no nesting of callbacks)
            })
        })
    })
    const pizza = '🍕';
    myFunction(pizza)
}

function getCheese(next) { // next is the callback funtion
    setTimeout(() => {
        const cheese = '🧀';
        console.log(`Sending the ${cheese}`);
        next(cheese);
    }, 2000);
}

function makeDough(cheese, next) {
    setTimeout(() => {
        const dough = cheese + ' 🫓';
        console.log(`Sending the ${dough}`);
        next(dough);
    }, 2000);
}

function bakePizza(dough, next) {
    setTimeout(() => {
        const pizza = dough + ' 🍕';
        console.log(`Sending the ${pizza}`);
        next(pizza);
    }, 2000);
}


function notifyMeOrSuccess(pizza) {
    console.log('here is my notification for', pizza); //wh
}

// orderPizza((pizza) => {
//     console.log('here is my', pizza);
// });


orderPizza(notifyMeOrSuccess);

console.log('visited nani');

console.log('rest');