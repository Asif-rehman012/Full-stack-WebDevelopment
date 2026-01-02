import React, { useEffect, useState , useRef } from 'react'

function Hooks() {

    const [counter, setCounter] = useState(0);
    let normalcounter =0;
    const refcounter = useRef(0);
    

    useEffect(() =>{
        console.log('state counter', counter ); //statecounter will keep changing they can retain their previous values
        console.log('normal counter', normalcounter);
        console.log('ref counter', refcounter);
        
        
        
        return ()=>{
          console.log('unmounting component');
          
        }
    })

    function increment(){
        setCounter(counter+1);
        normalcounter = normalcounter+1;
        refcounter.current = refcounter.current + 1;
    }
  return (
    <div>
    <p>{counter}</p>
    
    <button onClick={increment}>Increment</button>
       {/* after clicking increment it will call set counter function and incre value */}
</div>
  )


}

export default Hooks