


// const box1= document.getElementById('box-1');  // searching element by id
// const tagname= document.getElementsByTagName('div') // by tagname

// const search1container=document.querySelector('.container #box-5') //yha . # are necessary to use
// const searchall=document.querySelectorAll('div','classnamez')
// console.log(searchall);
// console.log(search1container);
// console.log(byclassname);
// console.log(tagname);
// console.log(box1);

// const container = document.getElementsByClassName('container')
// for (let index =1 ; index < 11; index++) {
//     const boxelement = document.createElement('div'); //element created without html tag
//     boxelement.classList.add('box'); // add class with values refer index.html style tag
//     container[0].append(boxelement);}
    
    
  

        //    PRACTICING IT

const divcontainer = document.getElementsByClassName('container');
   for(let i=0; i<10; i++){
         const element = document.createElement('div');
         element.classList.add('box');
         divcontainer[0].append(element);

   }



// box1.innerHTML="this is box1"; //here box1 is variable name for id box-1

box2.classList.add('bgcolortry'); //adding new class with new attributes (class values written in css)

box2.innerHTML="<h4>WORLD IS ON WAR</h4>";

box3.style.borderRadius = "10%"; //another way to directly give style in javascript file
box3.style.backgroundColor="yellow"; // use here camel case middle starting alphaber capital

// box1.classList.remove('box')


// document.getElementById('imgg').src ="img_use.jpg"; // id age fine change attribute

