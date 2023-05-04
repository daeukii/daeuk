import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope as faEnvelope, faSun  } from '@fortawesome/free-solid-svg-icons';
import './Weatherk.css';




export default function Weather() {

  const [weather, setWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");


  useEffect(()=>{
    async function getWeather() {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=2b6566e3917c241ac9d0ff5e5526430d&lang=kr');
        console.log(response);
        console.log(response.data.weather[0].main);
        console.log(response.data.weather[0].icon);
        setWeather(response.data.weather[0].description);
        setWeatherIcon(response.data.weather[0].icon);
      } catch (error) {
        console.error(error);
      }
    }

    getWeather();

    let weatherIcon = {
      '01' : 'fas fa-sun',
      '02' : 'fas fa-cloud-sun',
      '03' : 'fas fa-cloud',
      '04' : 'fas fa-cloud-meatball',
      '09' : 'fas fa-cloud-sun-rain',
      '10' : 'fas fa-cloud-showers-heavy',
      '11' : 'fas fa-poo-storm',
      '13' : 'far fa-snowflake',
      '50' : 'fas fa-smog'
    };


  }, []);



  return (
    <div className='wead'>
      <h2 className='n1'>오늘의 날씨 ▶{weather}, {weatherIcon}◀</h2>
      <h2 className='n2'>센츠헤븐를 방문해주신 모든 고객님. 오늘 날씨에는</h2>
      <h2 className='n2'>"{}"를 추천해드리고 싶어요</h2>
      
    </div>
    
  )
}