import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import Weather from '../../components/Weather/Weather';
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';


export default function Main() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();

    useEffect(() => {
        setName(products.name);
        setPrice(products.price);
        setImg(products.img);
    }, []);

    return (
        <div>
            <div>
                <Weather />
            </div>
            <div>
                <ReactPlayer
                    url={"https://youtu.be/DHB6gEKf34U"}
                    width="100vw"
                    height="50vh"
                    loop={true}
                    playing={true}
                    muted={true}
                    controls={false}
                />
            </div>
            <Marquee speed={30} gradient={false}>
                <div class="flex-box-height-wrap">
                    <img src={products[0].img} />
                    <img src={products[1].img} />
                    <img src={products[2].img} />
                    <img src={products[3].img} />
                    <img src={products[4].img} />
                    <img src={products[5].img} />
                    <img src={products[6].img} />
                    <img src={products[7].img} />
                    <img src={products[8].img} />
                    <img src={products[9].img} />
                    <img src={products[10].img} />
                    <img src={products[11].img} />
                    <img src={products[12].img} />
                    <img src={products[13].img} />
                    <img src={products[14].img} />
                    <img src={products[15].img} />
                    <img src={products[16].img} />
                    <img src={products[17].img} />
                </div>
            </Marquee>
            <div>

            </div>
        </div>
    );
}

