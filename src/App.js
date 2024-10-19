import React, { useMemo, useState } from 'react'
const App = () => {
  let[num1,updatenum1]=useState(0);
  let[num2,updatenum2]=useState(0);
  function show(num1)
  {
    for(let i=1;i<=1000000000;i++)
    {

    }
    return num1;
  }
  let t=useMemo(() => show(num1), [num1])
  return (
    <>
    <h1>App Component is running</h1>
    <h2>num1 {num1} num2 {num2} t {t}</h2>
    <button onClick={()=>{updatenum1(num1++)}}>uncrement num1</button>
    <button onClick={()=>{updatenum2(num2++)}}>uncrement num2</button>
    </>
  )
}

export default App