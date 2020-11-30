import React, { useState } from 'react';
import singerAPI from '../../../api/singer';

const initialSong = {
    name: '',
    
}
const NewSong = () => {

    
    const [song, setSong] = useState({});

    const [singerList, setSingerList] = useState([]);

    const rechiveSingers = async () => {
        let data = await singerAPI.getById();
        
        console.log(data);
        setSingerList(data);

    }

    return ( <div>

        <h1>this is NewSong component</h1>
    </div> );
}
 
export default NewSong;