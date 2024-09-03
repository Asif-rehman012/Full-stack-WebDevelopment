// const body = document.body;

// const children = body.children[1].children[0].innerHTML='changed text';// index first of li shown

// const list = document.getElementById('list');
// console.log(list.parentElement);//body is parent we can access childs with .children

// console.log(children);

// // form
// const numberinput= document.getElementById('numberinput');
// numberinput.value =""

// const submitbtn = document.getElementById("submitbtn");
// submitbtn.addEventListener('click', (event) =>{
//     event.preventDefault()
//     console.log(numberinput.value);
    
// })

// counter

const counterText = document.getElementById('counter');
const posBtn = document.getElementById('pos-btn');
const negBtn = document.getElementById('neg-btn');

let count = 0;
updateCount();

posBtn.addEventListener('click', () => {
    count++;
    updateCount();
})

negBtn.addEventListener('click', () => {
    if(count > 0) {
        count--;
        updateCount();
    }
    
})

function updateCount() {
    counterText.innerHTML = count;
}