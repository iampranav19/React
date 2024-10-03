import { useState } from "react"

function App() {
  const[val,setVal]=useState(0);
  function inc()
  {
    setVal(val+1);_
  }
  function dec()
  {
    if(val>0)
    setVal(val-1);
  }
  function reset()
  {
    setVal(0);
  }
return <>
<h1>Counter App:{val}</h1>
<button onClick={inc}>Increment</button>
<button onClick={dec}>Decrement</button>
<hr />
<button onClick={reset}>Reset</button>
    </>
}

export default App
