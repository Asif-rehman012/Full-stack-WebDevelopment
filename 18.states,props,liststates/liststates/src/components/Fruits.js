import React, { useState } from 'react'

function Fruits() {
     const [fruit, setfruit]=useState('Apple');
     const [inputText, setInputText] = useState(''); //making inputText variable
              //1. 2 variable bnayai fruit & inputText
        const updateFruit = () =>{
            setfruit(inputText);
        }

     function updateinputText(event) {
        const curInputvalue = event.target.value;
        setInputText(curInputvalue)

     }
    // re-rendring hogi valur update hoga jb b hm call karagai gai 
  return (
    <>
      <p>The value of fruit is {fruit}:</p>
        <input type="text" onChange={updateinputText}/>
      <button onClick={() =>setfruit('papaya')}>papaya</button>
      <button onClick={() =>setfruit('mango')}>mango</button>
      <button onClick={() => updateFruit()}>Submit</button>

    </>
  )
}

export default Fruits