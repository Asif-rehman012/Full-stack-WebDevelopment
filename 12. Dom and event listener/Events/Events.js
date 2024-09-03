const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
// const container = document.getElementById("container");


child.addEventListener('click', () => {
    console.log('child clicked');
    child.classList.toggle('round');
})

parent.addEventListener('click', () => {
    console.log('parent clicked');
})

grandparent.addEventListener('click', () => {
    console.log('grandparent clicked');
})









const box = document.getElementById('box') // box ko access kr liya
// jb b box pai click ho mai ek function call krna chahta ho

// function logmessage () {
//     console.log("Hi This is a log" ,logmessage);
    
// }  // old way function writing
    // let count = 0; 
    
    const coordinates =document.createElement('p');
    document.body.append(coordinates);
    
    const logmessage = (event) =>{
    //    console.log(event); // chrome slow hota hai use krna zaroori b nhi
       coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;

     box.style.left=`${event.offsetX}px`;
     box.style.top=`${event.offsetY}px`;
       
    }
   // make onpagescroll function 

        const onpagescroll= (event) =>{
            console.log(event);
            
        }

      document.addEventListener('scroll', onpagescroll);
       container.addEventListener('mousemove' ,logmessage); // it listens click event... u can use mousemove/ scroll/ click
                    //logmessage() braces means function pass kr rhai hai isiliyai NO BRACES ///// 

      
    //LINE 1 BOX KO DOODHA
    //box kai andr click event lga di
    // paragraph kai andr X & Y cordinate ko change krna hai