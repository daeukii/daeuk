import React from 'react'
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';


export default function Grooming() {

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
      <h1>센츠헤븐에서 고객님께 추천해 드리고 싶은 그루밍 제품 5종</h1>
        <div className="card">
        {products[13].name}
        <br/>
        {products[13].price}
          <div className="imgbx">
          <img src={products[13].img} />
          </div>
          <div className="content">
          {products[13].txt}
          </div>
        </div>
      </div>  
      <div className="container">
        <div className="card">
        {products[14].name}
        <br/>
        {products[14].price}
          <div className="imgbx">
          <img src={products[14].img} />
          </div>
          <div className="content">
          {products[14].txt}
          </div>
        </div>
      </div>  
      <div className="container">
        <div className="card">
        {products[15].name}
        <br/>
        {products[15].price}
          <div className="imgbx">
          <img src={products[15].img} />
          </div>
          <div className="content">
          {products[15].txt}
          </div>
        </div>
      </div>  
      <div className="container">
        <div className="card">
        {products[16].name}
        <br/>
        {products[16].price}
          <div className="imgbx">
          <img src={products[16].img} />
          </div>
          <div className="content">
          {products[16].txt}
          </div>
        </div>
      </div>  
      <div className="container">
        <div className="card">
        {products[17].name}
        <br/>
        {products[17].price}
          <div className="imgbx">
          <img src={products[17].img} />
          </div>
          <div className="content">
          {products[17].txt}
          </div>
        </div>
      </div>  
    </div>
  )
}