import React from 'react'
import './Perfume.css';
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';

export default function Perfume() {
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
      <h1>센츠헤븐에서 고객님께 추천해 드리고 싶은 향수 6종</h1>
        <div className="card">
        {products[0].name}
        <br/>
        {products[0].price}
          <div className="imgbx">
          <img src={products[0].img} />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
        {products[1].name}
        <br/>
        {products[1].price}
          <div className="imgbx">
          <img src={products[1].img} />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
        {products[2].name}
        <br/>
        {products[2].price}
          <div className="imgbx">
          <img src={products[2].img} />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
        {products[3].name}
        <br/>
        {products[3].price}
          <div className="imgbx">
          <img src={products[3].img} />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
        {products[4].name}
        <br/>
        {products[4].price}
          <div className="imgbx">
          <img src={products[4].img} />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
        {products[5].name}
        <br/>
        {products[5].price}
          <div className="imgbx">
          <img src={products[5].img} />
          </div>
          <div className="content">

          </div>
        </div>
      </div>
    </div>
  )
}

