import React, { useState, useEffect } from 'react';
import singerAPI from '../../../api/singer';

const initialSong = {
    name: '',
    
}
const NewSong = () => {

    
    const [song, setSong] = useState({});

    const [singerList, setSingerList] = useState([]);


    useEffect(() => {
        rechiveSingers();
    })

    const rechiveSingers = async () => {
        let data = await singerAPI.getById("3333dddd");
        console.log("OKKKKKKKK: ", data);
        setSingerList(data);

    }

    return ( <div>

        <h1>this is ddddd NewSong component</h1>
    </div> );
}
 
export default NewSong;