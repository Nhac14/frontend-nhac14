import React from 'react';
import 'antd/dist/antd.css';
import HeaderX from './pages/layout/HeaderX/HeaderX.js';
import Content from './pages/Home/Content.js';
import Footer from './pages/layout/Footer/Footer.js';


function App(){
   
      return (
         <div>
            <HeaderX/>
           
            <Content /> 
            <Footer/>
         </div>
      );
   }

export default App;