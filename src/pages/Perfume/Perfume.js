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
        <h2>{products.price}</h2>
        <div className="card">
          <div className="imgbx">
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="imgbx">
            <img src="" />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="imgbx">
            <img src="" />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="imgbx">
            <img src="" />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="imgbx">
            <img src="" />
          </div>
          <div className="content">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="imgbx">
            <img src="" />
          </div>
          <div className="content">

          </div>
        </div>
      </div>
    </div>
  )
}

