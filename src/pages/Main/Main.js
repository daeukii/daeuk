import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import Weather from '../../components/Weather/Weather';

export default function Main() {
    return (
        <div>
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
            <div>
                <Weather />
            </div>
        </div>
    );
}

