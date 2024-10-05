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
     </>
  )
}

export default NestedItr