import React, { useEffect, useState } from 'react'
import weatherperfume from "../../api/weatherperfume.json"
import './Recommend.css';

export default function Recommend() {
    const [weatherp, setWeatherp] = useState();
    const [name, setName] = useState();
    const [gender, setGender] = useState();

    useEffect(() => {
        setWeatherp(weatherperfume.gender);
        setName(weatherperfume.name);
        setGender(weatherperfume.weatherp);
    }, []);

    return (
        <div>
            <div className='dk1'>
            {weatherperfume[0].weatherp}
            {weatherperfume[0].name}
            {weatherperfume[0].gender}
            <br/>
            {weatherperfume[1].weatherp}
            {weatherperfume[1].name}
            {weatherperfume[1].gender}
            </div>
            <div className='dk2'>
            {weatherperfume[2].weatherp}
            {weatherperfume[2].name}
            {weatherperfume[2].gender}
            <br/>
            {weatherperfume[3].weatherp}
            {weatherperfume[3].name}
            {weatherperfume[3].gender}
            </div>
            <div className='dk3'>
            {weatherperfume[4].weatherp}
            {weatherperfume[4].name}
            {weatherperfume[4].gender}
            <br/>
            {weatherperfume[5].weatherp}
            {weatherperfume[5].name}
            {weatherperfume[5].gender}
            </div>
            <div className='dk4'>
            {weatherperfume[6].weatherp}
            {weatherperfume[6].name}
            {weatherperfume[6].gender}
            <br/>
            {weatherperfume[7].weatherp}
            {weatherperfume[7].name}
            {weatherperfume[7].gender}
            </div>
        </div>
    )
}