import React from 'react'
function Product() {
const products=["Car","Bike","Fan","AC"];

  return (
    <>
    <h1>Property Binding</h1>
  
    <ul>
      {
        products.map( pro=>
          <li key={pro}>{pro}</li>
        )
      }
    </ul>
    <h2>Select the Product</h2>
    <select name="" id="">
      {
        products.map(pro=> <option key={pro}>{pro}</option>)
      }
    </select>

    </>
  )
}
export default Product