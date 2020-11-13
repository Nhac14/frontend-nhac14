import React from 'react';
import ReactDOM from 'react-dom';
// antd import
import {Button} from 'antd';
import 'antd/dist/antd.css';
import HeaderX from './components/HeaderX.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';


class App extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <div class='container'>
            <HeaderX/>
            <Content/>
            <Footer/>
         </div>
      );
   }
}

export default App;