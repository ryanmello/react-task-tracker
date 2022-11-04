import React, { useState } from "react";

function Counter() {
  const [arr, setArr] = useState([]);

  function addPlus(){
    setArr(prevArr => [...prevArr, "+"])
    console.log(arr);
  }

  function addMinus(){
    /*
    setArr(prevArr => [...preArr, "-"])
    console.log(arr);
    */
    arr.push("-")
    console.log(arr);
  }

  return (
    <>
      <button onClick={addMinus}>-</button>
      <button onClick={addPlus}>+</button>
    </>
  );
}

export default Counter;
