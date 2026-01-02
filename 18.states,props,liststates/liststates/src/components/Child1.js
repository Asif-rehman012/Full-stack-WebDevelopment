import React,{useState} from 'react'

function Child1(props) {
    const [countInChild1, setcountInChild1] = useState(0);
     
  function updateCountInChild1(){
    setcountInChild1(countInChild1+1);
    props.onCountUpdate(countInChild1+1);
    
  }

  
    return (
    <div>
        <p>Inside the Child1 {countInChild1}</p>
        <button onClick={() => updateCountInChild1(countInChild1+1)}>
            Increment
        </button>
         </div>
  )
}

export default Child1