import React from 'react'

function Table() {
  const products=[
    {
      Name : "Samsung TV",
      Price : 54000
    },
    {
      Name : "iphone",
      Price : 90000
    }
  ];
  return (
    <>
      <h2>Product Details</h2>
    <table border={1} >
      <thead>
      <tr>
        <th>Product Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
        {
          products.map(pro=> 
              <tr>
                <td>{pro.Name}</td>
                <td>{pro.Price}</td>
              </tr>
          )
        }
      </tbody>

      
    </table>
    </>
  )
}

export default Table