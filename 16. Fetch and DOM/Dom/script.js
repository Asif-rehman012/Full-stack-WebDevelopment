const heading = document.getElementById('abc');
   heading.innerHTML = "pleaase callno 897"
 
 
heading.style.border ='3px, solid, green'
heading.style.backgroundColor='yellow'
heading.style.height='400px'
heading.classList.add('zz') //make class in html and add here 

const newElement = document.createElement('h1'); // created but we have to elobrate it with inner html
newElement.innerHTML='i am a computer science Student'
heading.appendChild(newElement); // append sai hmm parent kai sath child element dalai



