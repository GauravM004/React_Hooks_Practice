import React from 'react'
import { useState } from 'react'


function App() {
 const[count,setCounter] = useState(0)

function updateCount() {
  setCounter(count+1)
}
  return (
    <>
     <h1>Learning useStateHook</h1>
     <h1>Button Clicked {count} times</h1>
   <button onClick={updateCount}> Click </button>
    
    
    </>
  );
}

export default App
