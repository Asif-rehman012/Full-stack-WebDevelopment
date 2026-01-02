import React from 'react'

function Child2(props) {

    const showprivateData = false;
  return (

    <div>
        <div>

  {showprivateData ? <p>This s private : abcdef..xyz</p>:<></>}
   {showprivateData && <p>adgg</p>} 
</div>
    
   count inside child2 :{props.countFromparent}
<br />
 

   <button onClick={props.uploaddata}>
         {/* it calls upload data function */}
          Upload data
   </button>
    </div>
    
  )
}

export default Child2 