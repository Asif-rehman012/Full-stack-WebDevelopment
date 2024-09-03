try{
   
    console.log('here is no error'); // will print this line and catch block is not checked as of no error
     console.log (x); // x is not defined :refrence error
    console.log('checking this'); // as error occured in above line it will not check next line of try block
    
}
    catch(err){
    console.log(err);
    
console.log("error occured");
    }

    finally{  //will be executed always
        console.log('this will always be executed');
        
    }