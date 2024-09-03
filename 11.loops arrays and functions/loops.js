console.log("AASIF");


            //FOR LOOP HERE WE KNOW HOW MANY TIMES LOOP WILL RUN
for(let count=0; count<10; count++){
           console.log("Student", count);
           
}
       
       
            //WHILE LOOP:::: HERE WE DON'T KNOW HOW MANY TIMES LOOP WILL RUN

            let a=7;
            let b=0;

            while (b<a){ // runing without increment makes it infinite or passing value true in while cond.
                console.log("hello world", b); // we can also use increment in above line
                b++;
                
            }

            // //DO-WHILE LOOP (DO ACTION THEN CONDITION CHECK)

            // let i=5;
            // let m=0;
            // do{
            //     console.log(m, "kashmir");
            //     m++;
            // }while(m<5);



            // //WITH BREAK
            // let l=8;
            //     for(let k=0; k<8; k++){
            //         if(k==4){
            //             break;
            //         }
            //         console.log("state", k);
                    
            //     }

            //with CONTINUE
            for (let i = 0; i < 10; i++) {
                if (i === 3) { continue; }
                console.log("asif", i);
                ;
              }
              
            //   FOR-IN LOOP
            const words=['hello', 'world', 'welcome', 23, 88, true ] // we donot need define increment condition or initialization
        for(let i in words){   // define index variable will start from zero and ends at words .length increment b karai ga
                               // shortcut of  for (let i = 0; i < 10; i++)
            console.log('Hi', words[i]);
            
        }