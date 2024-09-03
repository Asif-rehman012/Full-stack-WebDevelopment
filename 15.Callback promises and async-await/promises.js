function orderPizza() {
    return new Promise(function (res, rej) { // creating promise accepts function and we can pass 2 resolve function & reject
        setTimeout(() => {
            const isAvailable = false;
            if(isAvailable) {
                const pizza = '🍕';
                res(pizza);     //resolve promise
            } else {
                rej('We do not have pizza')
            }
        }, 2000)
    })
}



const pizzaPromise = orderPizza();

pizzaPromise
    .then((pizza) => {              //this function gives us data
        console.log('my pizza', pizza);
    }).catch(error => {             // it gives us an error
        console.log('error ocured', error);
    }) 



    // Railway ticket example with promises 

// select seats
// enter name
// payments

bookRailwayTicket();

function bookRailwayTicket() {
    const seat = 'A3';
    const name = 'Asif';
    const payment = 870;
    selectSeats(seat) 
        .then((seat) => { //yah fullfill hoga fir yah then pai chala jayai ga
            enterDetails(name, seat)
        })
        .then((details) => {
            submitPayments(name, seat, payment)
        });
}

function selectSeats(seat) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('seats confirmed', seat);
            resolve(`confirmed ${seat}`);
        }, 2000)
    }); 
}

function enterDetails(name, seat) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('name binded', name, 'with', seat);
            resolve(`confirmed ${name} ${seat}`);
        }, 2000)
    }); 
}

function submitPayments(name, seat, payment) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('payment confirmed', name, 'with', payment);
            resolve(`confirmed ${name} ${seat} ${payment}`);
        }, 2000)
    }); 
}