import React from 'react'
import './Perfume.css';
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';

export default function Perfume() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();
  const [txt,setTxt] = useState();
  const [topnote, setTopnote] = useState();
  const [middlenote, setMiddlenote] =useState();
  const [basenote, setBasenote] = useState();

  useEffect(() => {
    setName(products.name);
    setPrice(products.price);
    setImg(products.img);
    setTxt(products.txt);
    setTopnote(products.topnote);
    setMiddlenote(products.middlenote);
    setBasenote(products.basenote);
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
          {products[0].txt}
          <br/>
          <br/>
          {products[0].topnote}
          <br/>
          {products[0].middlenote}
          <br/>
          {products[0].basenote}
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
          {products[1].txt}
          <br/>
          <br/>
          {products[1].topnote}
          <br/>
          {products[1].middlenote}
          <br/>
          {products[1].basenote}
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
          {products[2].txt}
          <br/>
          <br/>
          {products[2].topnote}
          <br/>
          {products[2].middlenote}
          <br/>
          {products[2].basenote}
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
          {products[3].txt}
          <br/>
          <br/>
          {products[3].topnote}
          <br/>
          {products[3].middlenote}
          <br/>
          {products[3].basenote}
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
          {products[4].txt}
          <br/>
          <br/>
          {products[4].topnote}
          <br/>
          {products[4].middlenote}
          <br/>
          {products[4].basenote}
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
          {products[5].txt}
          <br/>
          <br/>
          {products[5].topnote}
          <br/>
          {products[5].middlenote}
          <br/>
          {products[5].basenote}
          </div>
        </div>
      </div>
    </div>
  )
}