
          
              // IF ELSE STATEMENTS****

// const age= 10;


// if(age>18){
//     console.log("You can drive a car");
    
// } else{
//     console.log("You can't drive a Car");
    
// }

           // IF , ELSE-IF , ELSE (USED WHEN WE HAVE MORE THAN 1 WAY) ****

 const day = 3;
       console.log('calculating');
       

    if(day==1){
        console.log('its Monday');
        
    }
    else if (day==2){
           console.log('tuesday');
           
    }
    else if(day==3){
             console.log('wednesday');
             
    }
    else{
        console.log('Holiday');
        
    }

    console.log('DONE');
    

    // SWITCH STATEMENTS

    

    console.log("Calculating The Day Using Switch-Statement ::");
    
    switch (day){
        case 1:
          console.log('SUNDAY');
          break;

         case 2:
            console.log('MONDAY');
            break;

         case 3:
            console.log('Tuesday');
            break;

        default :
             console.log('NOT A VALID DAY');
             

           
          
    }

     const agee =25;
    agee>18 ? console.log("You can drive a car") :console.log("You canot drive a car");


   //logical operators

//    &&
//    ||
//    !


    const age= 44;


if(age>18 && age<45){
    console.log("You can drive a car");
    
} else{
    console.log("You can't drive a Car");
    
}