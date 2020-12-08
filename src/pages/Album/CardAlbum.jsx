import React, { useState } from 'react';
import './style.scss';


const CardAlbum = ({album}) => {

    return (
        <div className="cardAlbum">
            <img src={album.image} alt="aa"/>
            <div className="card-content">
                <p>{album.name}</p>
            </div>
        </div>
     );
}
 
export default CardAlbum;