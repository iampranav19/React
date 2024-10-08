import React, { useEffect } from 'react'
import { useState } from 'react'
function TwoWayBind() {

  const[name,setName]=useState('');

  function changeName(e)
  {
      setName(e.target.value);
  }
  return (
    <>
    <h1>Two Bind Demo</h1>
    <input type="text" name=""  value={name} onChange={changeName} /> <br />
    Hello {name}
    </>
  )
}

export default TwoWayBind