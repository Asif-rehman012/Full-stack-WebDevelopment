import React, { useEffect, useState } from "react";

function add(a, b) {
    return a+b;
}

function UseEffectHook() {

    const [counter, setCounter] = useState(0);
               // counter ki value zero sai intilize kr di
    const [name, setName] = useState('');

    // cleanup work here
    function callThisOnUnmout() {
        // component jaa rha ho iss sai return function call hoga
        console.log('unmounting here');
    }

    useEffect(() => {

        //  agar page mai kuch b change ho rha ho Aur AP CHAHTAI HO US CHEEZ KO CAPTURE KRNA 
        //  AP USE- EFFECT FUNCTION SAI CALL KR SAKHTAI HO bina array dependancy
        console.log(name, 'name updated');
        // useeffect rerendering mai countinously call hoga

        return callThisOnUnmout;

    }, [name]);

    useEffect(() => {
        console.log('first time mounted')
           // jb mount ho (load data) tb chalai ga
    }, [])

    useEffect(() => {
        console.log(counter, 'counter updated');
            //api call ho jb page load hoga woh hmm use effect mai likhtai hai
           // jb update ho tb chai ga
    }, [counter])

    useEffect(() => {
        console.log('re-rendering happened');
        // it will run always with counder upated values
    })

    return (
        <div>
            <p>{counter}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCounter(counter+1)}>Increment</button>
               {/* after clicking increment it will call set counter function and incre value */}
        </div>
    );
}

export default UseEffectHook;