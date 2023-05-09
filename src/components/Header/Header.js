import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import { useState } from 'react';



export default function Header() {
  const [active,setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");


  const navToggle = ()=>{
    active === "nav__menu"
    ? setActive("nav__menu__active")
    : setActive("nav__menu");

    // togglerIcon
    
    toggleIcon === "nav__toggler"
    ? setToggleIcon("nav__toggler toggle")
    : setToggleIcon("nav__toggler");
  };


  return (
    <nav className="nav">
      <Link to='/' class="nav__brand">ScentsHeaven</Link>
      <ul className={active}>
        <li className="nav__item"><Link to='/Perfume' className="nav__link">향수</Link></li>
        <li className="nav__item"><Link to='/Body' className="nav__link">바디</Link></li>
        <li className="nav__item"><Link to='/Candle' className="nav__link">캔들</Link></li>
        <li className="nav__item"> <Link to='/Grooming' className="nav__link">그루밍</Link></li>
        <li className="nav__item"><Link to='/Mbti' className="nav__link">MBTI별 향수 추천</Link></li>
        <li className="nav__item"><Link to='/PostMain' className="nav__link">게시판</Link></li>
        <li className="nav__item"><Link to='/Login' className="nav__link">로그인</Link></li>
        <li className="nav__item"><Link to='/Register' className="nav__link">회원가입</Link></li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

