import React from 'react'
import { useState,useEffect } from 'react'

function Shopping() {

  const[category,setCategory]=useState([]);

  const[product,setProduct]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=> setCategory(json))
  },[]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProduct(json))
  },[]);

  return (
    <>
    <div>
      <header>
        <h1>Shopping Home</h1>
      </header>
      <section>
        <label htmlFor="">Select a Category</label>
        <div>
          <select name="" id="">
            {
              category.map(e=>
                <option value="" key={e.id}>{e}</option>
              )
            }
          </select>
        </div>
        <div>
          <h2>Products</h2>
          <table border={1}>
            <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Rating</th>
            </tr>
            </thead>
            <tbody>
              {
                product.map(prod=> (
                  <tr>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                    <td>{prod.description}</td>
                    <td><img src={prod.image} alt="" width="50"  /></td>
                    <td>{prod.rating.rate} and Count {prod.rating.count}</td>
                  </tr>
                ) )
              }
            </tbody>
          </table>
        </div>

      </section>
    </div>
    </>
  )
}
export default Shopping