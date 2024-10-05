import React from 'react'

function NestedItr() {
  const menu=[
    {
      Category : "Electronics",
      Product : ["Samsung TV","Mobile"]
    },
    {
      Category : "Shoes",
      Product : ["Nike TV","Reebok"]
    }
  ]
  return (
    <>
    <h1>Product Details</h1>
    <ol>
     {
       menu.map(item=>
        <li>{item.Category}
        <ul>
          {
           item.Product.map(list=>
              <li>{list}</li>
           ) 
          }
        </ul>
        </li>
       )
     }
    </ol>
    <h2>Select the Product</h2>
      <select name="" id="">
        {
        menu.map((item, index) => (
          <optgroup key={index} label={item.Category}>
            {
            item.Product.map((sub, idx) => (
              <option key={idx} value={sub}>
                {sub}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
     </>
  )
}

export default NestedItr