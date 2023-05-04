import React from 'react'
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';

export default function Body() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();


  useEffect(() => {
    setName(products.name);
    setPrice(products.price);
    setImg(products.img);
  },[]);

  return (
    <div>
      <div className="container">
      <h1>센츠헤븐에서 고객님께 추천해 드리고 싶은 바디제품 3종</h1>
        <div className="card">
        {products[6].name}
        <br/>
        {products[6].price}
          <div className="imgbx">
          <img src={products[6].img} />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
        {products[7].name}
        <br/>
        {products[7].price}
          <div className="imgbx">
          <img src={products[7].img} />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
        {products[8].name}
        <br/>
        {products[8].price}
          <div className="imgbx">
          <img src={products[8].img} />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
    </div>
  )
}
