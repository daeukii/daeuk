import React from 'react'
import products from '../../api/products.json';
const name = products.name; 
const price = products.price;

export default function Candle() {
  return (
    <div>
        <div className="container">
        <div className="card">
          <div className="imgbx">
          <h2>{name}</h2>
          <h2>{price}</h2>
            <img src="" />
          </div>
          <div className="content">
          </div>
        </div>
      </div><div className="container">
        <div className="card">
          <div className="imgbx">
            <img src="" />
          </div>
          <div className="content">
          </div>
        </div>
      </div><div className="container">
        <div className="card">
          <div className="imgbx">
            <img src="" />
          </div>
          <div className="content">
          </div>
        </div>
      </div><div className="container">
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
