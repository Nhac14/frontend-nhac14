import React from 'react';
import 'antd/dist/antd.css';
import HeaderX from './pages/layout/Header/HeaderX.js';
import Content from './pages/Home/Content.js';
import FooterX from './pages/layout/Footer/FooterX.js';
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';

function App(){
   
      return (
         <div>
            <HeaderX/>

               <Content/>
            <FooterX/>

         </div>
      );
   }

export default App;