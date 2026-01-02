

import React, { useState } from 'react'

function Counter() {
    // let count =700;
    //let count = countState[0];
    //let setCount = countState[1]; instead of writing above let lines we can write below usestate hook
    let [count, setCount] = useState(100); // here we can make it useState hook by useState
                        // useState khud setCount ko bnata hai
                        // it will import useState from react
                        // useState will give us 2 array values
                        //it saves incremented values automatically
    function updateCount (){
      // count = count+1; iss sai nechai wala paragraph re-render nhi hoga(State variables allow re-rendering)
      setCount(count+1);// now it will re-render with updated values
      console.log('count is', count);
      
    }
  return (
 
    <div> 
      <p>The value of counter is : {count}</p>
      <button onClick={updateCount}>Increment</button>
    </div>
  )
}

export default Counter

// we use button for add event listner for click--- use onclick