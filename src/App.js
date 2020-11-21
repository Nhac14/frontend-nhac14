import React from 'react';
import 'antd/dist/antd.css';
import HeaderX from './pages/layout/HeaderX/HeaderX.js';
import Content from './pages/Home/Content.js';
import FooterX from './pages/layout/Footer/FooterX.js';
import UserProfile from './pages/userProfile/UserProfile';


function App(){
   
      return (
         <div>
            {/* <HeaderX/>
           
            <Content /> 
            <FooterX/> */}
            <HeaderX></HeaderX>
            <UserProfile></UserProfile>
            <FooterX></FooterX>

         </div>
      );
   }

export default App;