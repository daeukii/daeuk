import React from "react";
import './Announcement.css';
import Marquee from 'react-fast-marquee'

const Announcement = () => {
    return(
        <div className="announcement">
            <Marquee speed={100} gradient={false}>
            <div className="announcement-text text1">
                <span>센츠헤븐에 오신것을 환영합니다</span>
                <span>모시게되어서 영광입니다</span>
            </div>
            <div className="announcement-text text2">
                <span>센츠헤븐에 오신것을 환영합니다</span>
                <span>모시게되어서 영광입니다</span>
            </div>
            </Marquee>
            </div>
    )
}

export default Announcement