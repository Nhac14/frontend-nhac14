import React, { useState } from 'react';
import './style.scss';


const CardAlbum = ({album}) => {

    return (
        <div className="cardAlbum">
            <img src={album.image} alt="aa"/>
            <p>{album.name}</p>
        </div>
     );
}
 
export default CardAlbum;