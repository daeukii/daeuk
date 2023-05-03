import React from 'react'
import { useState, useEffect } from 'react';
import '../../api/products.json';
import products from '../../api/products.json';

export default function Mbti() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.price}</p>
      <p>{data.img}</p>
      <h1>당신의 MBTI를 입력해주세요.</h1>
      <h3>센츠헤븐에서 MBTI유형에 알맞는 향수를 추천해드립니다.</h3>
      <input type='textbox' placeholder='소문자로 작성해주세요'></input>
      <input type='submit'></input>
    </div>
  )
}