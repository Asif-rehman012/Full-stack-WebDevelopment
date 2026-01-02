import React, { useRef, useState } from "react";

function UserForm() {
  const [name, setname] = useState(""); //state variable
  const [fruit, setFruit] = useState("");
  // const nameInput = document.getElementById('') iss sai b ref input call hoga
  const nameInputRef = useRef(null);
  const fruitSelectRef = useRef(null);
  // instead of using getelementbyID we can use useref to Access an element
  function handleSubmit(event) {
    event.preventDefault();
    //even default for ko submit kro aur page ko reload kro
    // console.log('submit Clicked');
    const nameInputValue = nameInputRef.current.value;

    //alert hmai alert popup notfication dai ga

    const fruitValue = fruitSelectRef.current.value;
    alert(nameInputValue + fruitValue);
  }

  function handleChange(e) {
    console.log(e.target.value);
    setFruit(e.target.value);
  }
  const arr = [1, 2, 3];
  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", margin: "20px" }}>
      {/* onsubmit sai enter key sai hee form submit hota hai */}
      <label htmlFor="name">Name</label>
      {/* <input type="text" onChange={(event) => setname(event.target.value)}/> */}
      <input type="text" id="nameInput" ref={nameInputRef} />

      <br />
      <select ref={fruitSelectRef} onChange={handleChange}>
        {/* //in elements ko access krnai kailiyai 'use ref' use kiya instead of getelement byid */}
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <select name="" id="">
        {arr.map((element) => {
          return <option>choose {element}</option>;
        })}
      </select>

      <br />

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default UserForm;
