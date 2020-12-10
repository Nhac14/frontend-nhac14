import React, { useState } from 'react';
import './style.scss';


const CardAlbum = ({album}) => {

    return (
        <div className="cardAlbum">
            <img src={album.cover_image ? album.cover_image.path : "https://admin.yersin.edu.vn//images/images/yersin/news/NoImage.jpg"} alt="aa"/>
            <div className="card-content">
                <p>{album.name}</p>
            </div>
        </div>
     );
}
 
export default CardAlbum;