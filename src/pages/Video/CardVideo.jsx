import React, { Component } from 'react';
import './style.scss';
const CardVieo = ({ video }) => {

    const style = {
        relative: {
            position: 'relative',
        }
    }


    return (
            <div className="cardVideo">
                <div style={style.relative}>
                    <a><img src={video.image}></img></a>
                    <div className="durationVideo">
                        <span>{video.duration}</span>       
                    </div>
                </div>
                <p className="nameSong">{video.nameSong}</p>
                <p className="nameSinger">{video.nameSinger}</p>
            </div>
    );
}

export default CardVieo;