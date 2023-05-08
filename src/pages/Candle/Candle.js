import React from 'react'
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';

export default function Candle() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();
  const [txt,setTxt] = useState();


  useEffect(() => {
    setName(products.name);
    setPrice(products.price);
    setImg(products.img);
    setTxt(products.txt);
  },[]);

  return (
    <div>
        <div className="container">
        <h1>센츠헤븐에서 고객님께 추천해 드리고 싶은 캔들 4종</h1>
        <div className="card">
        {products[9].name}
        <br/>
        {products[9].price}
          <div className="imgbx">
          <img src={products[9].img} />
          </div>
          <div className="content">
          {products[9].txt}
          </div>
        </div>
      </div><div className="container">
        <div className="card">
        {products[10].name}
        <br/>
        {products[10].price}
          <div className="imgbx">
          <img src={products[10].img} />
          </div>
          <div className="content">
          {products[10].txt}
          </div>
        </div>
      </div><div className="container">
        <div className="card">
        {products[11].name}
        <br/>
        {products[11].price}
          <div className="imgbx">
          <img src={products[11].img} />
          </div>
          <div className="content">
          {products[11].txt}
          </div>
        </div>
      </div><div className="container">
        <div className="card">
        {products[12].name}
        <br/>
        {products[12].price}
          <div className="imgbx">
          <img src={products[12].img} />
          </div>
          <div className="content">
          {products[12].txt}
          </div>
        </div>
      </div>
    </div>
  )
}
