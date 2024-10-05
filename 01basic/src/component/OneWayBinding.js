import React from 'react'

function OneWayBinding() {

  const userName= "John";
  return (
    <>
    <h2>User Details</h2>
    <input type="text" name="" id="" value={userName} />
    <br/>Hello {userName} ! 
    </>
  )
}

export default OneWayBinding