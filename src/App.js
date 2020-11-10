import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <ReactPlayer 
      
      url={{src: "https://109a15170.vws.vegacdn.vn/CN03mE_YXNmdX6OLQSeaAA/1604610300/media2/song/web1/172/1412709/1412709.mp3?v=3", type: 'audio/mp3'}}
        controls={true}
        style={{border: "1px solid red", borderRadius: "20px" }}
        onPlay={true}
      />
      <p>OK</p>
      <h1>Lý Bá Tuấn =)))) test aws</h1>
    </div>
  );
}

export default App;
